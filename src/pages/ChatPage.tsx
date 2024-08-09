import Chat from 'components/Chat';
import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import { MOCK_CHAT } from 'mock/chat';
import { MOCK_MOVIES } from 'mock/movies';
import { MOCK_PROFILE } from 'mock/profile';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { movieId } = useParams();

  const movie = MOCK_MOVIES[0];

  return (
    <>
      <ChatHeader title={movie.title} />
      <div className='flex h-[calc(100%-56px)] w-full flex-col'>
        <div className='flex w-full grow flex-col gap-12 overflow-y-auto p-12'>
          {MOCK_CHAT.map((chat, index) => (
            <Chat
              chat={chat}
              hideProfile={
                MOCK_CHAT[index].user.id === MOCK_CHAT[index - 1]?.user.id
              }
              isMyChat={MOCK_PROFILE.id === chat.user.id}
            />
          ))}
        </div>
        <ChatInput />
      </div>
    </>
  );
};

export default ChatPage;
