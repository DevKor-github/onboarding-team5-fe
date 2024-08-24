import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io(`ws://13.124.210.246:3000/?userId=7`, {
  transports: ['websocket'],
});

const useSocket = () => {
  const createChat = () => {
    socket.emit('createChatRoom', { name: 'a', userIds: [7, 3] }, (value) => {
      console.log('CREATE', value);
    });
  };

  const leaveChat = () => {
    socket.emit('leaveChatRoom', { userId: 7, chatRoomId: 34 }, (value) => {
      console.log('LEAVE', value);
    });
  };

  const sendMessage = () => {
    socket.emit('sendMessage', {
      chatRoomId: 34,
      senderId: 7,
      message: '안녕하세요',
    });
  };

  useEffect(() => {
    socket.on('messageReceived', (value) => console.log(value));

    return () => {
      socket.off('messageReceived');
    };
  }, []);
  return { createChat, leaveChat, sendMessage };
};

export default useSocket;
