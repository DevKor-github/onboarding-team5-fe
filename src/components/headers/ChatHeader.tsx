import { useQuery } from '@tanstack/react-query';
import Kebab from 'assets/icons/kebab.svg';
import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { getProfile } from 'services/apis';
import { UserType } from 'types/client.types';

interface Props {
  profile: UserType | undefined;
}

const ChatHeader = ({ profile }: Props) => {
  return (
    <div className='flex h-60 w-full shrink-0 items-center justify-between border-b border-[#1E1E1E1A] px-24'>
      <div className='flex shrink-0 items-center gap-8'>
        <img
          src={profile?.profileImagePath ?? DefaultProfileImage}
          className='h-32 w-32 rounded-full object-cover'
        />
        <span>{profile?.name}</span>
      </div>
      <button>
        <img src={Kebab} />
      </button>
    </div>
  );
};

export default ChatHeader;
