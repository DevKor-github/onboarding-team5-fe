import { Cookies } from 'react-cookie';

interface SessionType {
  accessToken: string;
  refreshToken: string;
  id: number;
}

const SESSION_TIME = 3600 * 1000 * 3; // 3시간

const cookies = new Cookies();

export const setSession = ({ accessToken, refreshToken, id }: SessionType) => {
  const expires = new Date(Date.now() + SESSION_TIME);
  const option = {
    path: '/',
    expires,
  };

  cookies.set('access_token', accessToken, option);
  cookies.set('refresh_token', refreshToken, option);
  cookies.set('id', id, option);
};

export const getSession = () => {
  const accessToken: string = cookies.get('access_token');
  const refreshToken: string = cookies.get('refresh_token');
  const id = cookies.get('id');
  if (!id) {
    return null;
  }
  return { accessToken, refreshToken, id: Number(id) };
};

export const removeSession = () => {
  cookies.remove('access_token');
  cookies.remove('refresh_token');
  cookies.remove('id');
};
