import { MyProfileType, ProfileType } from 'types/client.types';
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

export const getProfile = async (id: number) => {
  const res = await instance.get(`/user/user-info?id=${id}`);
  const data: ProfileType | MyProfileType = res.data;
  return data;
};

export const updateProfile = async (body: {
  introduction?: string;
  profileImagePath?: string;
}) => {
  const res = await instance.patch('/user/update-profile', body);
  return res;
};
