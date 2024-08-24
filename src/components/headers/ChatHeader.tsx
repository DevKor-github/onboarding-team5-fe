import Kebab from 'assets/icons/kebab.svg';
import DefaultProfileImage from 'assets/images/default-profile.jpg';
import ProfileModal from 'components/modal/ProfileModal';
import { useState } from 'react';
import { UserType } from 'types/client.types';

interface Props {
  profile: UserType | undefined;
}

const ChatHeader = ({ profile }: Props) => {
  const [profileModal, setProfileModal] = useState(false);

  return (
    <>
      <div className='flex h-60 w-full shrink-0 items-center justify-between border-b border-[#1E1E1E1A] px-24'>
        <button
          onClick={() => setProfileModal(true)}
          className='flex shrink-0 items-center gap-8'
        >
          <img
            src={profile?.profileImagePath ?? DefaultProfileImage}
            className='h-32 w-32 rounded-full object-cover'
          />
          <span>{profile?.name}</span>
        </button>
        <button>
          <img src={Kebab} />
        </button>
      </div>
      {profileModal && (
        <ProfileModal
          profile={profile}
          closeModal={() => setProfileModal(false)}
        />
      )}
    </>
  );
};

export default ChatHeader;
