import DefaultProfileImage from 'assets/images/default-profile.jpg';
import InputContainer from './InputContainer';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getProfile } from 'services/apis';
import { getSession } from 'utils/handleSession';
import { useEffect } from 'react';
import { MyProfileType } from 'types/client.types';

interface ProfileEditValues {
  name: string;
  email: string;
  introduce: string;
}

const ProfileEditForm = () => {
  const session = getSession();

  const { data: profile } = useQuery({
    queryKey: ['my-profile'],
    queryFn: () => getProfile<MyProfileType>(session?.id),
    enabled: !!session?.id,
  });

  console.log(profile);

  const { control, setValue } = useForm<ProfileEditValues>({
    defaultValues: { name: '', email: '', introduce: '' },
  });

  useEffect(() => {
    if (!profile) {
      return;
    }
    setValue('name', profile.name);
    setValue('email', profile.email);
    setValue('introduce', profile?.introduction ?? '');
  }, [profile]);

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
