import Header from 'components/headers/Header';
import ProfileEditForm from 'components/ProfileEditForm';

const ProfilePage = () => {
  return (
    <>
      <Header />
      <div className='flex h-40 items-center border-b border-[#F5F5F5] px-24 text-18 font-600'>
        내 프로필
      </div>
      <div className='flex h-[calc(100dvh-100px)] w-full flex-col gap-12 overflow-scroll p-24'>
        <ProfileEditForm />
      </div>
    </>
  );
};

export default ProfilePage;
