import { ProfileType, UserType } from 'types/client.types';
import { instance } from './config/default';

export const signInUser = async (body: { email: string; password: string }) => {
  const res = await instance.post('/auth/login', body);
  const data: { accessToken: string; refreshToken: string; myId: number } =
    res.data;
  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    id: data.myId,
  };
};

export const signUpUser = async (body: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await instance.post('/auth/signup', body);
  const data: { accessToken: string; refreshToken: string; myId: number } =
    res.data;
  return {
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
    id: data.myId,
  };
};

export const getUsers = async () => {
  const res = await instance.get('/user');
  const data: UserType[] = res.data;
  return data;
};

export const getProfile = async <T extends UserType | ProfileType>(
  id: number | null | undefined,
) => {
  if (!id) {
    return;
  }
  const res = await instance.get(`/user/user-info?id=${id}`);
  const data: T = res.data;
  return data;
};

export const updateProfile = async (body: {
  introduction?: string;
  file?: FormData;
}) => {
  await instance.patch('/user/update-profile', body.file);
  const res = await instance.patch('/user/update-profile', {
    introduction: body.introduction,
  });
  return res;
};

export const getChattingRoom = async () => {
  const res = await instance.get(`/chat/list`);
  const data: {
    id: number;
    latestMessage: { content: string; senderId: number; createdAt: string };
    name: string;
    usersInfo: { id: number; name: string }[];
  }[] = res.data;
  return data;
};
