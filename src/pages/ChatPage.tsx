import ChatInput from 'components/ChatInput';
import ChatHeader from 'components/headers/ChatHeader';
import { MOCK_MOVIES } from 'mock/movies';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { movieId } = useParams();

  const movie = MOCK_MOVIES[0];

  return (
    <>
      <ChatHeader title={movie.title} />
      <div className='relative flex h-[calc(100%-56px)] w-full flex-col'>
        {movieId}
        <ChatInput />
      </div>
    </>
  );
};

export default ChatPage;
