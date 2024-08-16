import { Cookies } from 'react-cookie';

interface SessionType {
  accessToken: string;
  refreshToken: string;
  id: number;
}

const SESSION_TIME = 3600 * 1000 * 3; // 3시간

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const ID = 'id';

const cookies = new Cookies();

export const setSession = ({ accessToken, refreshToken, id }: SessionType) => {
  const expires = new Date(Date.now() + SESSION_TIME);
  const option = {
    path: '/',
    expires,
  };

  cookies.set(ACCESS_TOKEN, accessToken, option);
  cookies.set(REFRESH_TOKEN, refreshToken, option);
  cookies.set(ID, id, option);
};

export const getSession = () => {
  const accessToken: string = cookies.get(ACCESS_TOKEN);
  const refreshToken: string = cookies.get(REFRESH_TOKEN);
  const id = cookies.get(ID);
  if (!id) {
    return null;
  }
  return Number(id);
};

export const removeSession = () => {
  cookies.remove(ACCESS_TOKEN);
  cookies.remove(REFRESH_TOKEN);
  cookies.remove(ID);
};
