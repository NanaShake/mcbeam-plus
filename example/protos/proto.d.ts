import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Namespace gate. */
    namespace gate {

        /** Properties of a LoginReq. */
        interface ILoginReq {

            /** LoginReq username */
            username?: (string|null);
        }

        /** Represents a LoginReq. */
        class LoginReq implements ILoginReq {

            /**
             * Constructs a new LoginReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.ILoginReq);

            /** LoginReq username. */
            public username: string;

            /**
             * Creates a new LoginReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginReq instance
             */
            public static create(properties?: proto.gate.ILoginReq): proto.gate.LoginReq;

            /**
             * Encodes the specified LoginReq message. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link proto.gate.LoginReq.verify|verify} messages.
             * @param message LoginReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.LoginReq;

            /**
             * Decodes a LoginReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.LoginReq;

            /**
             * Verifies a LoginReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginReq
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.LoginReq;

            /**
             * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
             * @param message LoginReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a LoginRes. */
        interface ILoginRes {

            /** LoginRes code */
            code?: (string|null);

            /** LoginRes uid */
            uid?: (string|null);

            /** LoginRes username */
            username?: (string|null);
        }

        /** Represents a LoginRes. */
        class LoginRes implements ILoginRes {

            /**
             * Constructs a new LoginRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.ILoginRes);

            /** LoginRes code. */
            public code: string;

            /** LoginRes uid. */
            public uid: string;

            /** LoginRes username. */
            public username: string;

            /**
             * Creates a new LoginRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoginRes instance
             */
            public static create(properties?: proto.gate.ILoginRes): proto.gate.LoginRes;

            /**
             * Encodes the specified LoginRes message. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link proto.gate.LoginRes.verify|verify} messages.
             * @param message LoginRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.ILoginRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoginRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.LoginRes;

            /**
             * Decodes a LoginRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LoginRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.LoginRes;

            /**
             * Verifies a LoginRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoginRes
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.LoginRes;

            /**
             * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
             * @param message LoginRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.LoginRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoginRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a User. */
        interface IUser {

            /** User uid */
            uid?: (number|null);

            /** User username */
            username?: (string|null);
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IUser);

            /** User uid. */
            public uid: number;

            /** User username. */
            public username: string;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: proto.gate.IUser): proto.gate.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link proto.gate.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link proto.gate.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.User;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserNot. */
        interface IUserNot {

            /** UserNot action */
            action?: (number|null);

            /** UserNot user */
            user?: (proto.gate.IUser|null);
        }

        /** Represents a UserNot. */
        class UserNot implements IUserNot {

            /**
             * Constructs a new UserNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IUserNot);

            /** UserNot action. */
            public action: number;

            /** UserNot user. */
            public user?: (proto.gate.IUser|null);

            /**
             * Creates a new UserNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserNot instance
             */
            public static create(properties?: proto.gate.IUserNot): proto.gate.UserNot;

            /**
             * Encodes the specified UserNot message. Does not implicitly {@link proto.gate.UserNot.verify|verify} messages.
             * @param message UserNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IUserNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserNot message, length delimited. Does not implicitly {@link proto.gate.UserNot.verify|verify} messages.
             * @param message UserNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IUserNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.UserNot;

            /**
             * Decodes a UserNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.UserNot;

            /**
             * Verifies a UserNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserNot
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.UserNot;

            /**
             * Creates a plain object from a UserNot message. Also converts values to other types if specified.
             * @param message UserNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.UserNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Members. */
        interface IMembers {

            /** Members User */
            User?: (string[]|null);
        }

        /** Represents a Members. */
        class Members implements IMembers {

            /**
             * Constructs a new Members.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IMembers);

            /** Members User. */
            public User: string[];

            /**
             * Creates a new Members instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Members instance
             */
            public static create(properties?: proto.gate.IMembers): proto.gate.Members;

            /**
             * Encodes the specified Members message. Does not implicitly {@link proto.gate.Members.verify|verify} messages.
             * @param message Members message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IMembers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Members message, length delimited. Does not implicitly {@link proto.gate.Members.verify|verify} messages.
             * @param message Members message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IMembers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Members message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Members
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.Members;

            /**
             * Decodes a Members message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Members
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.Members;

            /**
             * Verifies a Members message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Members message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Members
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.Members;

            /**
             * Creates a plain object from a Members message. Also converts values to other types if specified.
             * @param message Members
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.Members, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Members to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatReq. */
        interface IChatReq {

            /** ChatReq content */
            content?: (string|null);
        }

        /** Represents a ChatReq. */
        class ChatReq implements IChatReq {

            /**
             * Constructs a new ChatReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IChatReq);

            /** ChatReq content. */
            public content: string;

            /**
             * Creates a new ChatReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatReq instance
             */
            public static create(properties?: proto.gate.IChatReq): proto.gate.ChatReq;

            /**
             * Encodes the specified ChatReq message. Does not implicitly {@link proto.gate.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link proto.gate.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.ChatReq;

            /**
             * Decodes a ChatReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.ChatReq;

            /**
             * Verifies a ChatReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatReq
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.ChatReq;

            /**
             * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
             * @param message ChatReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.ChatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatNot. */
        interface IChatNot {

            /** ChatNot uid */
            uid?: (string|null);

            /** ChatNot content */
            content?: (string|null);
        }

        /** Represents a ChatNot. */
        class ChatNot implements IChatNot {

            /**
             * Constructs a new ChatNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.gate.IChatNot);

            /** ChatNot uid. */
            public uid: string;

            /** ChatNot content. */
            public content: string;

            /**
             * Creates a new ChatNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatNot instance
             */
            public static create(properties?: proto.gate.IChatNot): proto.gate.ChatNot;

            /**
             * Encodes the specified ChatNot message. Does not implicitly {@link proto.gate.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.gate.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link proto.gate.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.gate.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.gate.ChatNot;

            /**
             * Decodes a ChatNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.gate.ChatNot;

            /**
             * Verifies a ChatNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatNot
             */
            public static fromObject(object: { [k: string]: any }): proto.gate.ChatNot;

            /**
             * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
             * @param message ChatNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.gate.ChatNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace mgr. */
    namespace mgr {

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id?: (string|null);

            /** Room name */
            name?: (string|null);

            /** Room status */
            status?: (number|null);
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IRoom);

            /** Room id. */
            public id: string;

            /** Room name. */
            public name: string;

            /** Room status. */
            public status: number;

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: proto.mgr.IRoom): proto.mgr.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.mgr.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.Room;

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRoomListReq. */
        interface IGetRoomListReq {
        }

        /** Represents a GetRoomListReq. */
        class GetRoomListReq implements IGetRoomListReq {

            /**
             * Constructs a new GetRoomListReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IGetRoomListReq);

            /**
             * Creates a new GetRoomListReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRoomListReq instance
             */
            public static create(properties?: proto.mgr.IGetRoomListReq): proto.mgr.GetRoomListReq;

            /**
             * Encodes the specified GetRoomListReq message. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @param message GetRoomListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IGetRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRoomListReq message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListReq.verify|verify} messages.
             * @param message GetRoomListReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IGetRoomListReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRoomListReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.GetRoomListReq;

            /**
             * Decodes a GetRoomListReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRoomListReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.GetRoomListReq;

            /**
             * Verifies a GetRoomListReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRoomListReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRoomListReq
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.GetRoomListReq;

            /**
             * Creates a plain object from a GetRoomListReq message. Also converts values to other types if specified.
             * @param message GetRoomListReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.GetRoomListReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRoomListReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetRoomListRes. */
        interface IGetRoomListRes {

            /** GetRoomListRes rooms */
            rooms?: (proto.mgr.IRoom[]|null);
        }

        /** Represents a GetRoomListRes. */
        class GetRoomListRes implements IGetRoomListRes {

            /**
             * Constructs a new GetRoomListRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.mgr.IGetRoomListRes);

            /** GetRoomListRes rooms. */
            public rooms: proto.mgr.IRoom[];

            /**
             * Creates a new GetRoomListRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetRoomListRes instance
             */
            public static create(properties?: proto.mgr.IGetRoomListRes): proto.mgr.GetRoomListRes;

            /**
             * Encodes the specified GetRoomListRes message. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @param message GetRoomListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.mgr.IGetRoomListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetRoomListRes message, length delimited. Does not implicitly {@link proto.mgr.GetRoomListRes.verify|verify} messages.
             * @param message GetRoomListRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.mgr.IGetRoomListRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.mgr.GetRoomListRes;

            /**
             * Decodes a GetRoomListRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetRoomListRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.mgr.GetRoomListRes;

            /**
             * Verifies a GetRoomListRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetRoomListRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetRoomListRes
             */
            public static fromObject(object: { [k: string]: any }): proto.mgr.GetRoomListRes;

            /**
             * Creates a plain object from a GetRoomListRes message. Also converts values to other types if specified.
             * @param message GetRoomListRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.mgr.GetRoomListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetRoomListRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace room. */
    namespace room {

        /** Properties of a User. */
        interface IUser {

            /** User uid */
            uid?: (string|null);

            /** User username */
            username?: (string|null);
        }

        /** Represents a User. */
        class User implements IUser {

            /**
             * Constructs a new User.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IUser);

            /** User uid. */
            public uid: string;

            /** User username. */
            public username: string;

            /**
             * Creates a new User instance using the specified properties.
             * @param [properties] Properties to set
             * @returns User instance
             */
            public static create(properties?: proto.room.IUser): proto.room.User;

            /**
             * Encodes the specified User message. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified User message, length delimited. Does not implicitly {@link proto.room.User.verify|verify} messages.
             * @param message User message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a User message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.User;

            /**
             * Decodes a User message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns User
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.User;

            /**
             * Verifies a User message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a User message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns User
             */
            public static fromObject(object: { [k: string]: any }): proto.room.User;

            /**
             * Creates a plain object from a User message. Also converts values to other types if specified.
             * @param message User
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this User to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Room. */
        interface IRoom {

            /** Room id */
            id?: (number|null);

            /** Room name */
            name?: (string|null);

            /** Room users */
            users?: (proto.room.IUser[]|null);
        }

        /** Represents a Room. */
        class Room implements IRoom {

            /**
             * Constructs a new Room.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IRoom);

            /** Room id. */
            public id: number;

            /** Room name. */
            public name: string;

            /** Room users. */
            public users: proto.room.IUser[];

            /**
             * Creates a new Room instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Room instance
             */
            public static create(properties?: proto.room.IRoom): proto.room.Room;

            /**
             * Encodes the specified Room message. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Room message, length delimited. Does not implicitly {@link proto.room.Room.verify|verify} messages.
             * @param message Room message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Room message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.Room;

            /**
             * Decodes a Room message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Room
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.Room;

            /**
             * Verifies a Room message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Room message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Room
             */
            public static fromObject(object: { [k: string]: any }): proto.room.Room;

            /**
             * Creates a plain object from a Room message. Also converts values to other types if specified.
             * @param message Room
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.Room, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Room to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JoinReq. */
        interface IJoinReq {

            /** JoinReq id */
            id?: (number|null);
        }

        /** Represents a JoinReq. */
        class JoinReq implements IJoinReq {

            /**
             * Constructs a new JoinReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IJoinReq);

            /** JoinReq id. */
            public id: number;

            /**
             * Creates a new JoinReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinReq instance
             */
            public static create(properties?: proto.room.IJoinReq): proto.room.JoinReq;

            /**
             * Encodes the specified JoinReq message. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @param message JoinReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link proto.room.JoinReq.verify|verify} messages.
             * @param message JoinReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.JoinReq;

            /**
             * Decodes a JoinReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.JoinReq;

            /**
             * Verifies a JoinReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinReq
             */
            public static fromObject(object: { [k: string]: any }): proto.room.JoinReq;

            /**
             * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
             * @param message JoinReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.JoinReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JoinRes. */
        interface IJoinRes {

            /** JoinRes code */
            code?: (string|null);

            /** JoinRes room */
            room?: (proto.room.IRoom|null);
        }

        /** Represents a JoinRes. */
        class JoinRes implements IJoinRes {

            /**
             * Constructs a new JoinRes.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IJoinRes);

            /** JoinRes code. */
            public code: string;

            /** JoinRes room. */
            public room?: (proto.room.IRoom|null);

            /**
             * Creates a new JoinRes instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JoinRes instance
             */
            public static create(properties?: proto.room.IJoinRes): proto.room.JoinRes;

            /**
             * Encodes the specified JoinRes message. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @param message JoinRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IJoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JoinRes message, length delimited. Does not implicitly {@link proto.room.JoinRes.verify|verify} messages.
             * @param message JoinRes message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IJoinRes, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JoinRes message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.JoinRes;

            /**
             * Decodes a JoinRes message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JoinRes
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.JoinRes;

            /**
             * Verifies a JoinRes message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JoinRes message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JoinRes
             */
            public static fromObject(object: { [k: string]: any }): proto.room.JoinRes;

            /**
             * Creates a plain object from a JoinRes message. Also converts values to other types if specified.
             * @param message JoinRes
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.JoinRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JoinRes to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatReq. */
        interface IChatReq {

            /** ChatReq content */
            content?: (string|null);
        }

        /** Represents a ChatReq. */
        class ChatReq implements IChatReq {

            /**
             * Constructs a new ChatReq.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IChatReq);

            /** ChatReq content. */
            public content: string;

            /**
             * Creates a new ChatReq instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatReq instance
             */
            public static create(properties?: proto.room.IChatReq): proto.room.ChatReq;

            /**
             * Encodes the specified ChatReq message. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatReq message, length delimited. Does not implicitly {@link proto.room.ChatReq.verify|verify} messages.
             * @param message ChatReq message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IChatReq, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatReq message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.ChatReq;

            /**
             * Decodes a ChatReq message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatReq
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.ChatReq;

            /**
             * Verifies a ChatReq message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatReq message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatReq
             */
            public static fromObject(object: { [k: string]: any }): proto.room.ChatReq;

            /**
             * Creates a plain object from a ChatReq message. Also converts values to other types if specified.
             * @param message ChatReq
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.ChatReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatReq to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ChatNot. */
        interface IChatNot {

            /** ChatNot uid */
            uid?: (string|null);

            /** ChatNot content */
            content?: (string|null);
        }

        /** Represents a ChatNot. */
        class ChatNot implements IChatNot {

            /**
             * Constructs a new ChatNot.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IChatNot);

            /** ChatNot uid. */
            public uid: string;

            /** ChatNot content. */
            public content: string;

            /**
             * Creates a new ChatNot instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatNot instance
             */
            public static create(properties?: proto.room.IChatNot): proto.room.ChatNot;

            /**
             * Encodes the specified ChatNot message. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ChatNot message, length delimited. Does not implicitly {@link proto.room.ChatNot.verify|verify} messages.
             * @param message ChatNot message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IChatNot, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ChatNot message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.ChatNot;

            /**
             * Decodes a ChatNot message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatNot
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.ChatNot;

            /**
             * Verifies a ChatNot message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatNot message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatNot
             */
            public static fromObject(object: { [k: string]: any }): proto.room.ChatNot;

            /**
             * Creates a plain object from a ChatNot message. Also converts values to other types if specified.
             * @param message ChatNot
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.ChatNot, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatNot to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserAction. */
        interface IUserAction {

            /** UserAction action */
            action?: (number|null);

            /** UserAction uid */
            uid?: (string|null);
        }

        /** Represents a UserAction. */
        class UserAction implements IUserAction {

            /**
             * Constructs a new UserAction.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.room.IUserAction);

            /** UserAction action. */
            public action: number;

            /** UserAction uid. */
            public uid: string;

            /**
             * Creates a new UserAction instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserAction instance
             */
            public static create(properties?: proto.room.IUserAction): proto.room.UserAction;

            /**
             * Encodes the specified UserAction message. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @param message UserAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.room.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserAction message, length delimited. Does not implicitly {@link proto.room.UserAction.verify|verify} messages.
             * @param message UserAction message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.room.IUserAction, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserAction message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.room.UserAction;

            /**
             * Decodes a UserAction message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserAction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.room.UserAction;

            /**
             * Verifies a UserAction message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserAction
             */
            public static fromObject(object: { [k: string]: any }): proto.room.UserAction;

            /**
             * Creates a plain object from a UserAction message. Also converts values to other types if specified.
             * @param message UserAction
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.room.UserAction, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserAction to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
