import { instance } from './config/default';

export const postSignIn = () => {
  const res = instance.post('/auth/login', {
    email: 'test@gmail.com',
    password: 'asdf1234',
  });
  console.log(res);
};

export const getProfile = (id: number) => {
  const res = instance.get(`/user/user-info?id=${id}`);
  console.log(res);
};

export const updateProfile = () => {
  const res = instance.patch('/user/update-profile', { name: '홍길동 2' });
  console.log(res);
};
