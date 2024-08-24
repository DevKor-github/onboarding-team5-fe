export interface UserType {
  id: number;
  name: string;
  profileImagePath?: string;
}

export interface ProfileType extends UserType {
  email: string;
}

export interface ChattingRoomType {
  id: number;
  updatedAt: string;
}

export interface FullChattingRoomType extends ChattingRoomType {
  messages: MessageType[];
}

export interface MessageType {
  id: number;
  senderId: number;
  content: string;
  createdAt: string;
}

export interface FullMessageType extends MessageType {
  sender: UserType;
  chatRoom: ChattingRoomType;
}
