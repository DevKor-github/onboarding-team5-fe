import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/headers/Header';
import ListHeader from 'components/headers/ListHeader';
import { MOCK_CHATTING_ROOM } from 'mock/chattingRoom';

const ListPage = () => {
  return (
    <>
      <Header />
      <ListHeader />
      <div className='flex w-full grow flex-col gap-12 overflow-scroll py-8'>
        <div className='h-[10px] w-full border-y border-[#F5F5F5] bg-[#FAFAFA]' />
        {MOCK_CHATTING_ROOM.map((chattingRoom) => (
          <ChattingRoom key={chattingRoom.user.id} value={chattingRoom} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
