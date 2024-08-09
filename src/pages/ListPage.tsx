import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/Header';
import { MOCK_MOVIES } from 'mock/movies';

const ListPage = () => {
  return (
    <>
      <Header />
      <div className='flex h-[calc(100%-56px)] w-full flex-col gap-12 overflow-scroll py-8'>
        {MOCK_MOVIES.map((movie) => (
          <ChattingRoom movie={movie} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
