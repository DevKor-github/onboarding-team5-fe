import { instance } from './config/default';

export const getProfile = (id: number) => {
  const res = instance.get(`/user/profile?id=${id}`);
  console.log(res);
};
