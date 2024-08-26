import { useEffect, useState } from 'react';
import { getChatHistory } from 'services/apis';
import { socket } from 'services/socket';
import {
  ChattingRoomType,
  FullMessageType,
  MessageType,
} from 'types/client.types';
import { getSession } from 'utils/handleSession';

const useSocket = () => {
  const session = getSession();
  const [chattingRoomId, setChattingRoomId] = useState<number | null>(null);
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [newMessage, setNewMessage] = useState<MessageType | null>(null);

  const createChat = (receiverId: number | undefined) => {
    if (!receiverId || !socket) {
      return;
    }
    socket?.emit(
      'createChatRoom',
      { name: '', userIds: [session?.id, receiverId] },
      (value: ChattingRoomType) => {
        setChattingRoomId(value.id);
        // console.log('CREATE: ', value);
      },
    );
  };

  const initMessageHistory = async (id: number) => {
    const messages = await getChatHistory(id);
    setMessages(messages ?? []);
  };

  useEffect(() => {
    if (!chattingRoomId) {
      return;
    }
    initMessageHistory(chattingRoomId);
  }, [chattingRoomId]);

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
      setNewMessage(value);
      // console.log('SEND: ', value);
    });

    return () => {
      socket?.off('messageReceived');
    };
  }, [socket]);

  useEffect(() => {
    if (!newMessage) {
      return;
    }
    if (newMessage.chatRoomId !== chattingRoomId) {
      setNewMessage(null);
      return;
    }
    setMessages((prev) => [...prev, newMessage]);
    setNewMessage(null);
  }, [newMessage]);

  return {
    createChat,
    leaveChat,
    sendMessage,
    isConnected: !!socket,
    messages,
  };
};

export default useSocket;
