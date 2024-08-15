import Kebab from 'assets/icons/kebab.svg';
import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { MOCK_PROFILE } from 'mock/profile';

interface Props {
  userId: number;
}

const ChatHeader = ({ userId }: Props) => {
  return (
    <div className='flex h-60 w-full items-center justify-between border-b border-[#1E1E1E1A] px-24'>
      <div className='flex shrink-0 items-center gap-8'>
        <img
          src={MOCK_PROFILE.profileImage ?? DefaultProfileImage}
          className='h-32 w-32 rounded-full object-cover'
        />
        <span>{MOCK_PROFILE.name}</span>
      </div>
      <button>
        <img src={Kebab} />
      </button>
    </div>
  );
};

export default ChatHeader;
