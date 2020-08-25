package scheduler

import (
	"github.com/micro/go-micro/v2/logger"
	"github.com/wolfplus2048/mcbeam-plus/constants"
	"sync"
	"sync/atomic"
	"time"
)

// Timer represents a cron job
type Timer struct {
	opts     TimerOptions
	id       int64 // timer id
	createAt int64 // timer create time
	elapse   int64 // total elapse time
	closed   int32 // is timer closed
}

type DefaultScheduler struct {
	opts           Options
	incrementID    int64      // auto increment id
	timers         sync.Map   // all Timers
	ChClosingTimer chan int64 // timer for closing
	ChCreatedTimer chan *Timer
	exit           chan struct{}
}

func newScheduler(opt ...Option) Scheduler {
	options := newOptions(opt...)
	return &DefaultScheduler{
		opts:           options,
		incrementID:    0,
		timers:         sync.Map{},
		ChClosingTimer: make(chan int64, options.timerBacklog),
		ChCreatedTimer: make(chan *Timer, options.timerBacklog),
		exit:           make(chan struct{}),
	}
}
func (d *DefaultScheduler) Init(opt ...Option) error {
	for _, o := range opt {
		o(&d.opts)
	}
	d.ChClosingTimer = make(chan int64, d.opts.timerBacklog)
	d.ChCreatedTimer = make(chan *Timer, d.opts.timerBacklog)
	return nil

}

func (d *DefaultScheduler) Options() Options {
	return d.opts
}

func (d *DefaultScheduler) Start() error {
	go func() {
		ticker := time.NewTicker(d.opts.Precision)
		for {
			select {
			case <-d.exit:
				break
			case <-ticker.C:
				d.Cron()
			case t := <-d.ChCreatedTimer:
				d.timers.Store(t.id, t)
			case id := <-d.ChClosingTimer:
				d.timers.Delete(id)
			}
		}
		ticker.Stop()
	}()
	return nil
}

func (d *DefaultScheduler) Stop() error {
	close(d.exit)
	return nil
}

func (d *DefaultScheduler) NewTimer(interval time.Duration, fn Func, opt ...TimerOption) int64 {
	id := atomic.AddInt64(&d.incrementID, 1)
	t := &Timer{
		opts: TimerOptions{
			Fn:       fn,
			Interval: interval,
			Counter:  LoopForever,
		},
		id:       id,
		createAt: time.Now().UnixNano(),
		elapse:   int64(interval), // first execution will be after interval
	}
	for _, o := range opt {
		o(&t.opts)
	}

	// add to manager
	d.ChCreatedTimer <- t

	return t.id
}
func (d *DefaultScheduler) RemoveTimer(id int64) error {
	v, ok := d.timers.Load(id)
	if !ok {
		return constants.ErrTimerNotFound
	}
	t := v.(*Timer)
	return d.stopTimer(t)
}
func (d *DefaultScheduler) stopTimer(t *Timer) error {
	if atomic.LoadInt32(&t.closed) > 0 {
		return constants.ErrCloseClosedTimer
	}

	// guarantee that logic is not blocked
	if len(d.ChClosingTimer) < d.opts.timerBacklog {
		d.ChClosingTimer <- t.id
		atomic.StoreInt32(&t.closed, 1)
	} else {
		t.opts.Counter = 0 // automatically closed in next Cron
	}
	return nil
}
func (d *DefaultScheduler) String() string {
	panic("DefaultScheduler")
}

// execute job function with protection
func pexec(id int64, fn Func) {
	defer func() {
		if err := recover(); err != nil {
			logger.Errorf("Call timer function error, TimerID=%d, Error=%v", id, err)
		}
	}()

	fn()
}

// Cron executes scheduled tasks
// TODO: if closing Timers'count in single cron call more than timerBacklog will case problem.
func (d *DefaultScheduler) Cron() {
	now := time.Now()
	unn := now.UnixNano()
	d.timers.Range(func(idInterface, tInterface interface{}) bool {
		t := tInterface.(*Timer)
		id := idInterface.(int64)
		// prevent ChClosingTimer exceed
		if t.opts.Counter == 0 {
			if len(d.ChClosingTimer) < d.opts.timerBacklog {
				d.stopTimer(t)
			}
			return true
		}

		// condition timer
		if t.opts.Condition != nil {
			if t.opts.Condition.Check(now) {
				pexec(id, t.opts.Fn)
			}
			return true
		}

		// execute job
		if t.createAt+t.elapse <= unn {
			pexec(id, t.opts.Fn)
			t.elapse += int64(t.opts.Interval)

			// update timer counter
			if t.opts.Counter != LoopForever && t.opts.Counter > 0 {
				t.opts.Counter--
			}
		}
		return true
	})
}
