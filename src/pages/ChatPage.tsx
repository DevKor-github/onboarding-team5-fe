import { useQuery } from '@tanstack/react-query';
import Chat from 'components/Chat';
import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import Header from 'components/headers/Header';
import ProfileModal from 'components/modal/ProfileModal';
import useSocket from 'hooks/useSocket';
import { useEffect, useRef, useState } from 'react';
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
  const isCreated = useRef(false);

  useEffect(() => {
    if (!isConnected || isCreated.current) {
      return;
    }
    createChat(Number(userId));
    isCreated.current = true;
  }, [userId, isConnected]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scrollRef.current, messages]);

  const [profileModal, setProfileModal] = useState(false);

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
              isRepeated={message.senderId === messages[index - 1]?.senderId}
              openModal={() => setProfileModal(true)}
            />
          ))}
        </div>
        <ChatInput handleSendChat={sendMessage} />
      </div>
      {profileModal && (
        <ProfileModal
          profile={receiverProfile}
          closeModal={() => setProfileModal(false)}
        />
      )}
    </>
  );
};

export default ChatPage;
