export interface UserType {
  id: number;
  name: string;
  introduction?: string;
  profileImagePath?: string;
}

export interface ProfileType extends UserType {
  email: string;
}

export interface ChattingRoomType {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface FullChattingRoomType extends ChattingRoomType {
  messages: MessageType[];
}

export interface MessageType {
  id: number;
  chatRoomId: number;
  senderId: number;
  content: string;
  createdAt: string;
}

export interface FullMessageType extends MessageType {
  sender: UserType;
  chatRoom: ChattingRoomType;
}
