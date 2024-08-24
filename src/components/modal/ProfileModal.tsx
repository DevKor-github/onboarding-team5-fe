import { UserType } from 'types/client.types';
import ModalFrame from './ModalFrame';
import DefaultProfileImage from 'assets/images/default-profile.jpg';

interface Props {
  closeModal: () => void;
  profile: UserType | undefined;
}

const ProfileModal = ({ closeModal, profile }: Props) => {
  return (
    <ModalFrame closeModal={closeModal}>
      <div className='flex h-300 w-300 flex-col items-center gap-24 p-36'>
        <img
          src={profile?.profileImagePath || DefaultProfileImage}
          className='h-120 w-120 rounded-full'
        />
        <div className='text-24 font-500'>{profile?.name}</div>
        <div className='text-gray-600 '>{profile?.introduction}</div>
      </div>
    </ModalFrame>
  );
};

export default ProfileModal;
