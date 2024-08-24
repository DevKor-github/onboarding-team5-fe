import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { FullChattingRoomType, FullMessageType } from 'types/client.types';
import { getSession } from 'utils/handleSession';

interface SendMessageProps {
  chatRoomId: number;
  message: string;
}

const useSocket = () => {
  const session = getSession();
  const [socket, setSocket] = useState<Socket>();

  const initSocket = () => {
    if (socket || !session) {
      return;
    }
    const newSocket = io(`ws://13.124.210.246:3000/?userId=${session.id}`, {
      transports: ['websocket'],
    });
    setSocket(newSocket);
  };

  useEffect(() => {
    initSocket();
    return () => {
      socket?.disconnect();
    };
  }, []);

  const createChat = (receiverId: number) => {
    socket?.emit(
      'createChatRoom',
      { name: '', userIds: [session?.id, receiverId] },
      (value: FullChattingRoomType) => {
        console.log('CREATE', value);
      },
    );
  };

  const leaveChat = (chatRoomId: number) => {
    socket?.emit('leaveChatRoom', { userId: session?.id, chatRoomId });
  };

  const sendMessage = ({ chatRoomId, message }: SendMessageProps) => {
    socket?.emit('sendMessage', {
      chatRoomId,
      senderId: session?.id,
      message,
    });
  };

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on('messageReceived', (value: FullMessageType) =>
      console.log(value),
    );

    return () => {
      socket.off('messageReceived');
    };
  }, [socket]);
  return { createChat, leaveChat, sendMessage };
};

export default useSocket;
