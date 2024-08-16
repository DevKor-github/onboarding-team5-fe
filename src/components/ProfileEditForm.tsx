import DefaultProfileImage from 'assets/images/default-profile.jpg';
import InputContainer from './InputContainer';
import { useForm } from 'react-hook-form';
import { getProfile, postSignIn, updateProfile } from 'services/apis';

interface ProfileEditValues {
  name: string;
  email: string;
  introduce: string;
}

const ProfileEditForm = () => {
  const { control } = useForm<ProfileEditValues>({
    defaultValues: { name: '', email: '', introduce: '' },
  });

  // getProfile(7);
  // postSignIn();
  // updateProfile();

  return (
    <form className='h-full w-full'>
      <div className='flex h-300 w-full items-center justify-center '>
        <img src={DefaultProfileImage} className='h-200 w-200 rounded-full' />
      </div>
      <div className='flex w-full flex-col gap-16'>
        <InputContainer name='name' control={control} disabled>
          이름
        </InputContainer>
        <InputContainer name='email' control={control} disabled>
          이메일
        </InputContainer>
        <InputContainer name='introduce' control={control}>
          한 줄 소개
        </InputContainer>
      </div>
    </form>
  );
};

export default ProfileEditForm;
