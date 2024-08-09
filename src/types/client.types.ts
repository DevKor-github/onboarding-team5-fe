export interface MovieType {
  id: number;
  title: string;
  image: string;
  genre: string[];
  keyword?: string[];
}

export interface ProfileType {
  id: number;
  name: string;
  nickname: string;
  email: string;
  introduce?: string;
  profileImage?: string;
  genre?: string[];
}
