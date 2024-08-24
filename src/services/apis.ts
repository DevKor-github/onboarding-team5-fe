import { ProfileType, UserType } from 'types/client.types';
import { instance } from './config/default';

const TEST_ACCOUNT = {
  email: 'test@gmail.com',
  password: 'asdf1234',
};

export const signInUser = async () => {
  const res = await instance.post('/auth/login', TEST_ACCOUNT);
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
  profileImagePath?: string;
}) => {
  const res = await instance.patch('/user/update-profile', body);
  return res;
};

export const getChattingRoom = async () => {
  const res = await instance.get(`/chat/list`);
  const data = res.data;
  return data;
};
