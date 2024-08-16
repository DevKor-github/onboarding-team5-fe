import DefaultProfileImage from 'assets/images/default-profile.jpg';
import InputContainer from './InputContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, updateProfile } from 'services/apis';
import { getSession } from 'utils/handleSession';
import { useEffect } from 'react';
import { MyProfileType } from 'types/client.types';
import toast from 'react-hot-toast';

interface ProfileEditValues {
  name: string;
  email: string;
  introduction: string;
}

const ProfileEditForm = () => {
  const session = getSession();

  const { data: profile } = useQuery({
    queryKey: ['my-profile'],
    queryFn: () => getProfile<MyProfileType>(session?.id),
    enabled: !!session?.id,
  });

  const { control, setValue, handleSubmit } = useForm<ProfileEditValues>({
    defaultValues: { name: '', email: '', introduction: '' },
  });

  useEffect(() => {
    if (!profile) {
      return;
    }
    setValue('name', profile.name);
    setValue('email', profile.email);
    setValue('introduction', profile?.introduction ?? '');
  }, [profile]);

  const queryClient = useQueryClient();

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-profile'] });
      toast.success('변경사항이 저장되었습니다.');
    },
    onError: () => {
      toast.error('다시 시도해주세요.');
    },
  });

  const handleUpdateProfile: SubmitHandler<ProfileEditValues> = (
    formValues,
  ) => {
    updateProfileMutation.mutate({ introduction: formValues.introduction });
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdateProfile)}
      className='h-full w-full'
      noValidate
    >
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
        <InputContainer name='introduction' control={control}>
          한 줄 소개
        </InputContainer>
        <button className='mt-20 h-40 w-full rounded-8 border border-gray-400 bg-gray-50'>
          수정하기
        </button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
