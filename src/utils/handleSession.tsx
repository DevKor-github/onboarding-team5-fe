import { Cookies } from 'react-cookie';

interface SessionType {
  accessToken: string;
  refreshToken: string;
}

const SESSION_TIME = 3600 * 1000 * 3; // 3시간

const cookies = new Cookies();

export const setSession = ({ accessToken, refreshToken }: SessionType) => {
  const expires = new Date(Date.now() + SESSION_TIME);
  const option = {
    path: '/',
    expires,
  };

  cookies.set('access_token', accessToken, option);
  cookies.set('refresh_token', refreshToken, option);
};

export const getSession = () => {
  const accessToken: string = cookies.get('access_token');
  const refreshToken: string = cookies.get('refresh_token');
  if (!accessToken) {
    return null;
  }
  return { accessToken, refreshToken };
};

export const removeSession = () => {
  cookies.remove('access_token');
  cookies.remove('refresh_token');
};
