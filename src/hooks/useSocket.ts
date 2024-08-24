import { useEffect, useState } from 'react';
import { socket } from 'services/socket';
import {
  FullChattingRoomType,
  FullMessageType,
  MessageType,
} from 'types/client.types';
import { getSession } from 'utils/handleSession';

const useSocket = () => {
  const session = getSession();
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
        setMessages(value.messages ?? []);
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
      socket?.off('messageReceived');
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
