import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { ChatType } from 'types/client.types';

interface Props {
  chat: ChatType;
}

const Chat = ({ chat }: Props) => {
  return (
    <div className='flex gap-12'>
      <button className='relative h-32 w-32 overflow-hidden rounded-12'>
        <img
          src={chat.user?.profileImage ?? DefaultProfileImage}
          className='h-full w-full object-cover'
        />
      </button>
      <div>
        <div className='text-12 text-gray-400'>{chat.user.nickname}</div>
        <p className='rounded-8 bg-[#414141] px-8 py-4'>{chat.value}</p>
      </div>
    </div>
  );
};

export default Chat;
