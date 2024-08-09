import Chat from 'components/Chat';
import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import { MOCK_CHAT } from 'mock/chat';
import { MOCK_MOVIES } from 'mock/movies';
import { MOCK_PROFILE } from 'mock/profile';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatType } from 'types/client.types';

const ChatPage = () => {
  const { movieId } = useParams();
  const movie = MOCK_MOVIES[0];

  const [chats, setChats] = useState<ChatType[]>(MOCK_CHAT);

  const handleSendChat = (value: string) => {
    const newChat: ChatType = {
      user: { id: MOCK_PROFILE.id, nickname: MOCK_PROFILE.nickname },
      value,
    };
    setChats((prev) => [...prev, newChat]);
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [scrollRef.current, chats]);

  return (
    <>
      <ChatHeader title={movie.title} />
      <div className='flex h-[calc(100%-56px)] w-full flex-col'>
        <div
          ref={scrollRef}
          className='flex w-full grow flex-col gap-12 overflow-y-auto p-12'
        >
          {chats.map((chat, index) => (
            <Chat
              key={index}
              chat={chat}
              hideProfile={chats[index].user.id === chats[index - 1]?.user.id}
              isMyChat={MOCK_PROFILE.id === chat.user.id}
            />
          ))}
        </div>
        <ChatInput handleSendChat={handleSendChat} />
      </div>
    </>
  );
};

export default ChatPage;
