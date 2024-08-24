import { useQuery } from '@tanstack/react-query';
import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/headers/Header';
import ListHeader from 'components/headers/ListHeader';
import { getChattingRoom, getUsers } from 'services/apis';

const ListPage = () => {
  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  const { data: chattingRoom } = useQuery({
    queryKey: ['chattingRoom'],
    queryFn: getChattingRoom,
  });
  console.log(chattingRoom, users);

  return (
    <>
      <Header />
      <ListHeader />
      <div className='flex h-[calc(100dvh-108px)] w-full flex-col gap-12 overflow-scroll py-8'>
        <div className='h-[10px] w-full border-y border-[#F5F5F5] bg-[#FAFAFA]' />
        {users?.map((user) => <ChattingRoom key={user.id} user={user} />)}
      </div>
    </>
  );
};

export default ListPage;
