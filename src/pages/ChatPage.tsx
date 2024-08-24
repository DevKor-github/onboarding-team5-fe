import { useQuery } from '@tanstack/react-query';
import Chat from 'components/Chat';
import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import Header from 'components/headers/Header';
import useSocket from 'hooks/useSocket';
import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from 'services/apis';
import { UserType } from 'types/client.types';
import { getSession } from 'utils/handleSession';

const ChatPage = () => {
  const { userId } = useParams();
  const { data: receiverProfile } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => getProfile<UserType>(Number(userId)),
    enabled: !!userId,
  });

  const session = getSession();

  const { createChat, sendMessage, isConnected, messages } = useSocket();

  useEffect(() => {
    if (!isConnected) {
      return;
    }
    createChat(Number(userId));
  }, [userId, isConnected]);

  console.log(messages);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scrollRef.current, messages]);

  return (
    <>
      <Header />
      <ChatHeader profile={receiverProfile} />
      <div className='flex h-[calc(100dvh-100px)] w-full flex-col'>
        <div
          ref={scrollRef}
          className='flex w-full grow flex-col gap-12 overflow-y-auto p-24'
        >
          {messages?.map((message, index) => (
            <Chat
              key={message.id}
              message={message}
              receiver={receiverProfile}
              isMyChat={session?.id === message.senderId}
              isRepeated={session?.id === messages[index - 1]?.senderId}
            />
          ))}
        </div>
        <ChatInput handleSendChat={sendMessage} />
      </div>
    </>
  );
};

export default ChatPage;
