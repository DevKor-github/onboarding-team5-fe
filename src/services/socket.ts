import { io } from 'socket.io-client';
import { getSession } from 'utils/handleSession';

const session = getSession();

export const socket = io(`ws://13.124.210.246:3000/?userId=${session?.id}`, {
  transports: ['websocket'],
});
