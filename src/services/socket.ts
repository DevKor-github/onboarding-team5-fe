import { io } from 'socket.io-client';
import { getSession } from 'utils/handleSession';

const session = getSession();

export const socket = io(
  `${import.meta.env.VITE_SOCKET_URL}/?userId=${session?.id}`,
  {
    transports: ['websocket'],
  },
);
