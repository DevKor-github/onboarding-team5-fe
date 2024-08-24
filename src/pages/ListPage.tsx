import { useQuery } from '@tanstack/react-query';
import ChattingRoom from 'components/ChattingRoom';
import Header from 'components/headers/Header';
import ListHeader from 'components/headers/ListHeader';
import { getChattingRoom, getUsers } from 'services/apis';
import { getSession } from 'utils/handleSession';

const ListPage = () => {
  const session = getSession();

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  const { data: chattingRoom } = useQuery({
    queryKey: ['chattingRoom'],
    queryFn: getChattingRoom,
  });

  const filteredUsers = users?.filter((user) => {
    if (
      user.id === session?.id ||
      chattingRoom?.find((room) => room.usersInfo.find((e) => e.id === user.id))
    ) {
      return false;
    }
    return true;
  });

  const sortedChattingRoom = chattingRoom?.sort(
    (a, b) =>
      new Date(b.latestMessage.createdAt).getTime() -
      new Date(a.latestMessage.createdAt).getTime(),
  );

  return (
    <>
      <Header />
      <ListHeader />
      <div className='flex h-[calc(100dvh-108px)] w-full flex-col gap-12 overflow-scroll py-8'>
        <div className='h-[10px] w-full border-y border-[#F5F5F5] bg-[#FAFAFA]' />
        {sortedChattingRoom?.map((room) => (
          <ChattingRoom
            key={room.id}
            user={room.usersInfo.find((e) => e.id !== session?.id)}
            latestMessage={room.latestMessage.content}
            updatedAt={room.latestMessage.createdAt}
          />
        ))}
        {filteredUsers?.map((user) => (
          <ChattingRoom key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};

export default ListPage;
