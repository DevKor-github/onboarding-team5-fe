export interface ProfileType {
  name: string;
  introduction?: string;
  profileImagePath?: string;
}

export interface MyProfileType extends ProfileType {
  email: string;
}

export interface UserType {
  id: number;
  name: string;
  profileImage?: string;
}

export interface ChattingRoomType {
  user: UserType;
  lastChat: string;
  time: string;
}

export interface ChatType {
  user: UserType;
  value: string;
  time: string;
}
