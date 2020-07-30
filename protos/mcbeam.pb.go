// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.12.1
// source: protos/mcbeam.proto

package mcbeamproto

import (
	proto "github.com/golang/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type MsgType int32

const (
	MsgType_MsgRequest  MsgType = 0
	MsgType_MsgNotify   MsgType = 1
	MsgType_MsgResponse MsgType = 2
	MsgType_MsgPush     MsgType = 3
)

// Enum value maps for MsgType.
var (
	MsgType_name = map[int32]string{
		0: "MsgRequest",
		1: "MsgNotify",
		2: "MsgResponse",
		3: "MsgPush",
	}
	MsgType_value = map[string]int32{
		"MsgRequest":  0,
		"MsgNotify":   1,
		"MsgResponse": 2,
		"MsgPush":     3,
	}
)

func (x MsgType) Enum() *MsgType {
	p := new(MsgType)
	*p = x
	return p
}

func (x MsgType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (MsgType) Descriptor() protoreflect.EnumDescriptor {
	return file_protos_mcbeam_proto_enumTypes[0].Descriptor()
}

func (MsgType) Type() protoreflect.EnumType {
	return &file_protos_mcbeam_proto_enumTypes[0]
}

func (x MsgType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use MsgType.Descriptor instead.
func (MsgType) EnumDescriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{0}
}

type RPCType int32

const (
	RPCType_Sys  RPCType = 0
	RPCType_User RPCType = 1
)

// Enum value maps for RPCType.
var (
	RPCType_name = map[int32]string{
		0: "Sys",
		1: "User",
	}
	RPCType_value = map[string]int32{
		"Sys":  0,
		"User": 1,
	}
)

func (x RPCType) Enum() *RPCType {
	p := new(RPCType)
	*p = x
	return p
}

func (x RPCType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (RPCType) Descriptor() protoreflect.EnumDescriptor {
	return file_protos_mcbeam_proto_enumTypes[1].Descriptor()
}

func (RPCType) Type() protoreflect.EnumType {
	return &file_protos_mcbeam_proto_enumTypes[1]
}

func (x RPCType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use RPCType.Descriptor instead.
func (RPCType) EnumDescriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{1}
}

type Error struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Code     string            `protobuf:"bytes,1,opt,name=code,proto3" json:"code,omitempty"`
	Msg      string            `protobuf:"bytes,2,opt,name=msg,proto3" json:"msg,omitempty"`
	Metadata map[string]string `protobuf:"bytes,3,rep,name=metadata,proto3" json:"metadata,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Error) Reset() {
	*x = Error{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Error) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Error) ProtoMessage() {}

func (x *Error) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Error.ProtoReflect.Descriptor instead.
func (*Error) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{0}
}

func (x *Error) GetCode() string {
	if x != nil {
		return x.Code
	}
	return ""
}

func (x *Error) GetMsg() string {
	if x != nil {
		return x.Msg
	}
	return ""
}

func (x *Error) GetMetadata() map[string]string {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Session struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id   int64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Uid  string `protobuf:"bytes,2,opt,name=uid,proto3" json:"uid,omitempty"`
	Data []byte `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *Session) Reset() {
	*x = Session{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Session) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Session) ProtoMessage() {}

func (x *Session) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Session.ProtoReflect.Descriptor instead.
func (*Session) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{1}
}

func (x *Session) GetId() int64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Session) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *Session) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

type Msg struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id    uint64  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Route string  `protobuf:"bytes,2,opt,name=route,proto3" json:"route,omitempty"`
	Data  []byte  `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
	Reply string  `protobuf:"bytes,4,opt,name=reply,proto3" json:"reply,omitempty"`
	Type  MsgType `protobuf:"varint,5,opt,name=type,proto3,enum=mcbeamproto.MsgType" json:"type,omitempty"`
}

func (x *Msg) Reset() {
	*x = Msg{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Msg) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Msg) ProtoMessage() {}

func (x *Msg) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Msg.ProtoReflect.Descriptor instead.
func (*Msg) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{2}
}

func (x *Msg) GetId() uint64 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Msg) GetRoute() string {
	if x != nil {
		return x.Route
	}
	return ""
}

func (x *Msg) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *Msg) GetReply() string {
	if x != nil {
		return x.Reply
	}
	return ""
}

func (x *Msg) GetType() MsgType {
	if x != nil {
		return x.Type
	}
	return MsgType_MsgRequest
}

type Request struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type       RPCType  `protobuf:"varint,1,opt,name=type,proto3,enum=mcbeamproto.RPCType" json:"type,omitempty"`
	Session    *Session `protobuf:"bytes,2,opt,name=session,proto3" json:"session,omitempty"`
	Msg        *Msg     `protobuf:"bytes,3,opt,name=msg,proto3" json:"msg,omitempty"`
	FrontendID string   `protobuf:"bytes,4,opt,name=frontendID,proto3" json:"frontendID,omitempty"`
	Metadata   []byte   `protobuf:"bytes,5,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *Request) Reset() {
	*x = Request{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Request) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Request) ProtoMessage() {}

func (x *Request) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Request.ProtoReflect.Descriptor instead.
func (*Request) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{3}
}

func (x *Request) GetType() RPCType {
	if x != nil {
		return x.Type
	}
	return RPCType_Sys
}

func (x *Request) GetSession() *Session {
	if x != nil {
		return x.Session
	}
	return nil
}

func (x *Request) GetMsg() *Msg {
	if x != nil {
		return x.Msg
	}
	return nil
}

func (x *Request) GetFrontendID() string {
	if x != nil {
		return x.FrontendID
	}
	return ""
}

func (x *Request) GetMetadata() []byte {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Response struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data  []byte `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	Error *Error `protobuf:"bytes,2,opt,name=error,proto3" json:"error,omitempty"`
}

func (x *Response) Reset() {
	*x = Response{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Response) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Response) ProtoMessage() {}

func (x *Response) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Response.ProtoReflect.Descriptor instead.
func (*Response) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{4}
}

func (x *Response) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *Response) GetError() *Error {
	if x != nil {
		return x.Error
	}
	return nil
}

type KickMsg struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	UserId string `protobuf:"bytes,1,opt,name=userId,proto3" json:"userId,omitempty"`
}

func (x *KickMsg) Reset() {
	*x = KickMsg{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KickMsg) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KickMsg) ProtoMessage() {}

func (x *KickMsg) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KickMsg.ProtoReflect.Descriptor instead.
func (*KickMsg) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{5}
}

func (x *KickMsg) GetUserId() string {
	if x != nil {
		return x.UserId
	}
	return ""
}

type KickAnswer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Kicked bool `protobuf:"varint,1,opt,name=kicked,proto3" json:"kicked,omitempty"`
}

func (x *KickAnswer) Reset() {
	*x = KickAnswer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KickAnswer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KickAnswer) ProtoMessage() {}

func (x *KickAnswer) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KickAnswer.ProtoReflect.Descriptor instead.
func (*KickAnswer) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{6}
}

func (x *KickAnswer) GetKicked() bool {
	if x != nil {
		return x.Kicked
	}
	return false
}

type Push struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Route string `protobuf:"bytes,1,opt,name=route,proto3" json:"route,omitempty"`
	Uid   string `protobuf:"bytes,2,opt,name=uid,proto3" json:"uid,omitempty"`
	Data  []byte `protobuf:"bytes,3,opt,name=data,proto3" json:"data,omitempty"`
}

func (x *Push) Reset() {
	*x = Push{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Push) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Push) ProtoMessage() {}

func (x *Push) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Push.ProtoReflect.Descriptor instead.
func (*Push) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{7}
}

func (x *Push) GetRoute() string {
	if x != nil {
		return x.Route
	}
	return ""
}

func (x *Push) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *Push) GetData() []byte {
	if x != nil {
		return x.Data
	}
	return nil
}

type BindMsg struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uid string `protobuf:"bytes,1,opt,name=uid,proto3" json:"uid,omitempty"`
	Fid string `protobuf:"bytes,2,opt,name=fid,proto3" json:"fid,omitempty"`
}

func (x *BindMsg) Reset() {
	*x = BindMsg{}
	if protoimpl.UnsafeEnabled {
		mi := &file_protos_mcbeam_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *BindMsg) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BindMsg) ProtoMessage() {}

func (x *BindMsg) ProtoReflect() protoreflect.Message {
	mi := &file_protos_mcbeam_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BindMsg.ProtoReflect.Descriptor instead.
func (*BindMsg) Descriptor() ([]byte, []int) {
	return file_protos_mcbeam_proto_rawDescGZIP(), []int{8}
}

func (x *BindMsg) GetUid() string {
	if x != nil {
		return x.Uid
	}
	return ""
}

func (x *BindMsg) GetFid() string {
	if x != nil {
		return x.Fid
	}
	return ""
}

var File_protos_mcbeam_proto protoreflect.FileDescriptor

var file_protos_mcbeam_proto_rawDesc = []byte{
	0x0a, 0x13, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xa8, 0x01, 0x0a, 0x05, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x12, 0x0a, 0x04,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x63, 0x6f, 0x64, 0x65,
	0x12, 0x10, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d,
	0x73, 0x67, 0x12, 0x3c, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x03,
	0x20, 0x03, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x1a, 0x3b, 0x0a, 0x0d, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72,
	0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c, 0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x3f, 0x0a,
	0x07, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x02, 0x69, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x7f,
	0x0a, 0x03, 0x4d, 0x73, 0x67, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12,
	0x14, 0x0a, 0x05, 0x72, 0x65, 0x70, 0x6c, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x72, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x28, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x0e, 0x32, 0x14, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2e, 0x4d, 0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x22,
	0xc3, 0x01, 0x0a, 0x07, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x14, 0x2e, 0x6d, 0x63, 0x62, 0x65,
	0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x52, 0x50, 0x43, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x2e, 0x0a, 0x07, 0x73, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x73, 0x65,
	0x73, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x22, 0x0a, 0x03, 0x6d, 0x73, 0x67, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x10, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x4d, 0x73, 0x67, 0x52, 0x03, 0x6d, 0x73, 0x67, 0x12, 0x1e, 0x0a, 0x0a, 0x66, 0x72, 0x6f,
	0x6e, 0x74, 0x65, 0x6e, 0x64, 0x49, 0x44, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x66,
	0x72, 0x6f, 0x6e, 0x74, 0x65, 0x6e, 0x64, 0x49, 0x44, 0x12, 0x1a, 0x0a, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x08, 0x6d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x22, 0x48, 0x0a, 0x08, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0c, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x28, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x52, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x22,
	0x21, 0x0a, 0x07, 0x4b, 0x69, 0x63, 0x6b, 0x4d, 0x73, 0x67, 0x12, 0x16, 0x0a, 0x06, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x75, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x22, 0x24, 0x0a, 0x0a, 0x4b, 0x69, 0x63, 0x6b, 0x41, 0x6e, 0x73, 0x77, 0x65, 0x72,
	0x12, 0x16, 0x0a, 0x06, 0x6b, 0x69, 0x63, 0x6b, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08,
	0x52, 0x06, 0x6b, 0x69, 0x63, 0x6b, 0x65, 0x64, 0x22, 0x42, 0x0a, 0x04, 0x50, 0x75, 0x73, 0x68,
	0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x72, 0x6f, 0x75, 0x74, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x2d, 0x0a, 0x07,
	0x42, 0x69, 0x6e, 0x64, 0x4d, 0x73, 0x67, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x75, 0x69, 0x64, 0x12, 0x10, 0x0a, 0x03, 0x66, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x66, 0x69, 0x64, 0x2a, 0x46, 0x0a, 0x07, 0x4d,
	0x73, 0x67, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0e, 0x0a, 0x0a, 0x4d, 0x73, 0x67, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x10, 0x00, 0x12, 0x0d, 0x0a, 0x09, 0x4d, 0x73, 0x67, 0x4e, 0x6f, 0x74,
	0x69, 0x66, 0x79, 0x10, 0x01, 0x12, 0x0f, 0x0a, 0x0b, 0x4d, 0x73, 0x67, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x10, 0x02, 0x12, 0x0b, 0x0a, 0x07, 0x4d, 0x73, 0x67, 0x50, 0x75, 0x73,
	0x68, 0x10, 0x03, 0x2a, 0x1c, 0x0a, 0x07, 0x52, 0x50, 0x43, 0x54, 0x79, 0x70, 0x65, 0x12, 0x07,
	0x0a, 0x03, 0x53, 0x79, 0x73, 0x10, 0x00, 0x12, 0x08, 0x0a, 0x04, 0x55, 0x73, 0x65, 0x72, 0x10,
	0x01, 0x32, 0xfa, 0x01, 0x0a, 0x06, 0x4d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x12, 0x35, 0x0a, 0x04,
	0x43, 0x61, 0x6c, 0x6c, 0x12, 0x14, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x6d, 0x63, 0x62,
	0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x00, 0x12, 0x38, 0x0a, 0x0a, 0x50, 0x75, 0x73, 0x68, 0x54, 0x6f, 0x55, 0x73, 0x65,
	0x72, 0x12, 0x11, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e,
	0x50, 0x75, 0x73, 0x68, 0x1a, 0x15, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x42, 0x0a,
	0x11, 0x53, 0x65, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x42, 0x69, 0x6e, 0x64, 0x52, 0x65, 0x6d, 0x6f,
	0x74, 0x65, 0x12, 0x14, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x2e, 0x42, 0x69, 0x6e, 0x64, 0x4d, 0x73, 0x67, 0x1a, 0x15, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61,
	0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x3b, 0x0a, 0x08, 0x4b, 0x69, 0x63, 0x6b, 0x55, 0x73, 0x65, 0x72, 0x12, 0x14, 0x2e,
	0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2e, 0x4b, 0x69, 0x63, 0x6b,
	0x4d, 0x73, 0x67, 0x1a, 0x17, 0x2e, 0x6d, 0x63, 0x62, 0x65, 0x61, 0x6d, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x2e, 0x4b, 0x69, 0x63, 0x6b, 0x41, 0x6e, 0x73, 0x77, 0x65, 0x72, 0x22, 0x00, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_protos_mcbeam_proto_rawDescOnce sync.Once
	file_protos_mcbeam_proto_rawDescData = file_protos_mcbeam_proto_rawDesc
)

func file_protos_mcbeam_proto_rawDescGZIP() []byte {
	file_protos_mcbeam_proto_rawDescOnce.Do(func() {
		file_protos_mcbeam_proto_rawDescData = protoimpl.X.CompressGZIP(file_protos_mcbeam_proto_rawDescData)
	})
	return file_protos_mcbeam_proto_rawDescData
}

var file_protos_mcbeam_proto_enumTypes = make([]protoimpl.EnumInfo, 2)
var file_protos_mcbeam_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_protos_mcbeam_proto_goTypes = []interface{}{
	(MsgType)(0),       // 0: mcbeamproto.MsgType
	(RPCType)(0),       // 1: mcbeamproto.RPCType
	(*Error)(nil),      // 2: mcbeamproto.Error
	(*Session)(nil),    // 3: mcbeamproto.Session
	(*Msg)(nil),        // 4: mcbeamproto.Msg
	(*Request)(nil),    // 5: mcbeamproto.Request
	(*Response)(nil),   // 6: mcbeamproto.Response
	(*KickMsg)(nil),    // 7: mcbeamproto.KickMsg
	(*KickAnswer)(nil), // 8: mcbeamproto.KickAnswer
	(*Push)(nil),       // 9: mcbeamproto.Push
	(*BindMsg)(nil),    // 10: mcbeamproto.BindMsg
	nil,                // 11: mcbeamproto.Error.MetadataEntry
}
var file_protos_mcbeam_proto_depIdxs = []int32{
	11, // 0: mcbeamproto.Error.metadata:type_name -> mcbeamproto.Error.MetadataEntry
	0,  // 1: mcbeamproto.Msg.type:type_name -> mcbeamproto.MsgType
	1,  // 2: mcbeamproto.Request.type:type_name -> mcbeamproto.RPCType
	3,  // 3: mcbeamproto.Request.session:type_name -> mcbeamproto.Session
	4,  // 4: mcbeamproto.Request.msg:type_name -> mcbeamproto.Msg
	2,  // 5: mcbeamproto.Response.error:type_name -> mcbeamproto.Error
	5,  // 6: mcbeamproto.Mcbeam.Call:input_type -> mcbeamproto.Request
	9,  // 7: mcbeamproto.Mcbeam.PushToUser:input_type -> mcbeamproto.Push
	10, // 8: mcbeamproto.Mcbeam.SessionBindRemote:input_type -> mcbeamproto.BindMsg
	7,  // 9: mcbeamproto.Mcbeam.KickUser:input_type -> mcbeamproto.KickMsg
	6,  // 10: mcbeamproto.Mcbeam.Call:output_type -> mcbeamproto.Response
	6,  // 11: mcbeamproto.Mcbeam.PushToUser:output_type -> mcbeamproto.Response
	6,  // 12: mcbeamproto.Mcbeam.SessionBindRemote:output_type -> mcbeamproto.Response
	8,  // 13: mcbeamproto.Mcbeam.KickUser:output_type -> mcbeamproto.KickAnswer
	10, // [10:14] is the sub-list for method output_type
	6,  // [6:10] is the sub-list for method input_type
	6,  // [6:6] is the sub-list for extension type_name
	6,  // [6:6] is the sub-list for extension extendee
	0,  // [0:6] is the sub-list for field type_name
}

func init() { file_protos_mcbeam_proto_init() }
func file_protos_mcbeam_proto_init() {
	if File_protos_mcbeam_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_protos_mcbeam_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Error); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Session); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Msg); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Request); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Response); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KickMsg); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KickAnswer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Push); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_protos_mcbeam_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*BindMsg); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_protos_mcbeam_proto_rawDesc,
			NumEnums:      2,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_protos_mcbeam_proto_goTypes,
		DependencyIndexes: file_protos_mcbeam_proto_depIdxs,
		EnumInfos:         file_protos_mcbeam_proto_enumTypes,
		MessageInfos:      file_protos_mcbeam_proto_msgTypes,
	}.Build()
	File_protos_mcbeam_proto = out.File
	file_protos_mcbeam_proto_rawDesc = nil
	file_protos_mcbeam_proto_goTypes = nil
	file_protos_mcbeam_proto_depIdxs = nil
}