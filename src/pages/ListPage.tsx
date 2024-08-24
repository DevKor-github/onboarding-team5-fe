import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/headers/Header';
import ListHeader from 'components/headers/ListHeader';
import useSocket from 'hooks/useSocket';
import { MOCK_CHATTING_ROOM } from 'mock/chattingRoom';
import { getChatting } from 'services/apis';
import { io } from 'socket.io-client';

const ListPage = () => {
  console.log(getChatting());

  const { createChat, sendMessage, leaveChat } = useSocket();

  return (
    <>
      <Header />
      <ListHeader />
      <div className='flex h-[calc(100dvh-108px)] w-full flex-col gap-12 overflow-scroll py-8'>
        <div className='h-[10px] w-full border-y border-[#F5F5F5] bg-[#FAFAFA]' />
        {MOCK_CHATTING_ROOM.map((chattingRoom) => (
          <ChattingRoom key={chattingRoom.user.id} value={chattingRoom} />
        ))}
        <button onClick={createChat}>CREATE</button>
        <button onClick={sendMessage}>SEND</button>
        <button onClick={leaveChat}>LEAVE</button>
      </div>
    </>
  );
};

export default ListPage;
