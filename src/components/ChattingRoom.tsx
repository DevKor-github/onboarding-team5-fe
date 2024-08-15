import { Link } from 'react-router-dom';
import { ChattingRoomType } from 'types/client.types';
import DefaultProfileImage from 'assets/images/default-profile.jpg';

interface Props {
  value: ChattingRoomType;
}

const ChattingRoom = ({ value }: Props) => {
  return (
    <Link
      to={`/${value.user.id}`}
      className='flex h-64 w-full items-center justify-between border-b border-[#1E1E1E1A] px-24'
    >
      <div className='flex shrink-0 items-center gap-8'>
        <img
          src={value.user.profileImage ?? DefaultProfileImage}
          className='h-32 w-32 rounded-full object-cover'
        />
        <span>{value.user.name}</span>
      </div>
      <div className='line-clamp-1 w-60 grow px-12 text-12 text-gray-500'>
        {value.lastChat}
      </div>
      <div className='text-12'>{value.time}</div>
    </Link>
  );
};

export default ChattingRoom;
