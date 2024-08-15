import axios from 'axios';
import { getSession } from 'utils/handleSession';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const session = getSession();

  if (session?.accessToken) {
    config.headers.Authorization = `Bearer ${session.accessToken}`;
  }

  return config;
});
