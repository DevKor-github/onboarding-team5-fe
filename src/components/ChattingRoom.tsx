import { Link } from 'react-router-dom';
import { UserType } from 'types/client.types';
import DefaultProfileImage from 'assets/images/default-profile.jpg';

interface Props {
  user?: UserType;
  latestMessage?: string;
  updatedAt?: string;
}

const ChattingRoom = ({ user, latestMessage, updatedAt }: Props) => {
  return (
    <Link
      to={`/${user?.id}`}
      className='flex h-64 w-full shrink-0 items-center justify-between border-b border-[#1E1E1E1A] px-24'
    >
      <div className='flex shrink-0 items-center gap-8'>
        <img
          src={user?.profileImagePath ?? DefaultProfileImage}
          className='h-32 w-32 rounded-full object-cover'
        />
        <span>{user?.name}</span>
      </div>
      <div className='line-clamp-1 w-60 grow px-12 text-12 text-gray-500'>
        {latestMessage}
      </div>
      <div className='text-12'>{updatedAt}</div>
    </Link>
  );
};

export default ChattingRoom;
