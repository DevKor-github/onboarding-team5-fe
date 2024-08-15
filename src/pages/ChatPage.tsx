import Chat from 'components/Chat';
import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import Header from 'components/headers/Header';
import { MOCK_CHATS } from 'mock/chat';
import { MOCK_PROFILE } from 'mock/profile';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatType } from 'types/client.types';

const ChatPage = () => {
  const { userId } = useParams();

  // const [chats, setChats] = useState<ChatType[]>(MOCK_CHAT);

  // const handleSendChat = (value: string) => {
  //   const newChat: ChatType = {
  //     user: { id: MOCK_PROFILE.id, nickname: MOCK_PROFILE.nickname },
  //     value,
  //   };
  //   setChats((prev) => [...prev, newChat]);
  // };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scrollRef.current]);

  return (
    <>
      <Header />
      <ChatHeader userId={Number(userId ?? 0)} />
      <div className='flex h-[calc(100%-56px)] w-full flex-col'>
        <div
          ref={scrollRef}
          className='flex w-full grow flex-col gap-12 overflow-y-auto p-24'
        >
          {MOCK_CHATS.map((chat, index) => (
            <Chat
              chat={chat}
              isMyChat={MOCK_PROFILE.id === chat.user.id}
              isRepeated={chat.user.id === MOCK_CHATS[index - 1]?.user.id}
            />
          ))}
        </div>
        {/* <ChatInput handleSendChat={handleSendChat} /> */}
      </div>
    </>
  );
};

export default ChatPage;
