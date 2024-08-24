import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import {
  FullChattingRoomType,
  FullMessageType,
  MessageType,
} from 'types/client.types';
import { getSession } from 'utils/handleSession';

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

  const [chattingRoomId, setChattingRoomId] = useState<number | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);

  const createChat = (receiverId: number | undefined) => {
    if (!receiverId || !socket) {
      return;
    }
    socket?.emit(
      'createChatRoom',
      { name: '', userIds: [session?.id, receiverId] },
      (value: FullChattingRoomType) => {
        setMessages(value.messages);
        setChattingRoomId(value.id);
      },
    );
  };

  const leaveChat = (chatRoomId: number) => {
    socket?.emit('leaveChatRoom', { userId: session?.id, chatRoomId });
    setChattingRoomId(null);
    setMessages([]);
  };

  const sendMessage = (value: string) => {
    socket?.emit('sendMessage', {
      chatRoomId: chattingRoomId,
      senderId: session?.id,
      message: value,
    });
  };

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on('messageReceived', (value: FullMessageType) => {
      setMessages((prev) => [...prev, value]);
    });

    return () => {
      socket.off('messageReceived');
    };
  }, [socket]);
  return {
    createChat,
    leaveChat,
    sendMessage,
    isConnected: !!socket,
    messages,
  };
};

export default useSocket;
