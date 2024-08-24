import DefaultProfileImage from 'assets/images/default-profile.jpg';
import InputContainer from './InputContainer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProfile, updateProfile } from 'services/apis';
import { getSession } from 'utils/handleSession';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { ProfileType } from 'types/client.types';
import Pencil from 'assets/icons/pencil.svg';

interface ProfileEditValues {
  name: string;
  email: string;
  introduction: string;
}

const ProfileEditForm = () => {
  const session = getSession();

  const { data: profile } = useQuery({
    queryKey: ['my-profile'],
    queryFn: () => getProfile<ProfileType>(session?.id),
    enabled: !!session?.id,
  });

  const { control, setValue, handleSubmit } = useForm<ProfileEditValues>({
    defaultValues: {
      name: '',
      email: '',
      introduction: '',
    },
  });

  useEffect(() => {
    if (!profile) {
      return;
    }
    setValue('name', profile.name);
    setValue('email', profile.email);
    setValue('introduction', profile?.introduction ?? '');
    setImageUrl(profile?.profileImagePath ?? '');
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

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string | null>('');

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setImageFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
  };

  const handleUpdateProfile: SubmitHandler<ProfileEditValues> = (
    formValues,
  ) => {
    const imageFormData = new FormData();
    imageFile && imageFormData.append('file', imageFile);
    updateProfileMutation.mutate({
      introduction: formValues.introduction,
      file: imageFormData,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleUpdateProfile)}
      className='h-full w-full'
      noValidate
    >
      <div className='relative flex h-300 w-full items-center justify-center'>
        <img
          src={imageUrl || DefaultProfileImage}
          className='h-200 w-200 rounded-full object-cover'
        />
        <button
          type='button'
          onClick={() => {
            fileInputRef.current?.click();
          }}
          className='absolute right-132 top-60 flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border border-gray-400 bg-gray-100'
        >
          <img src={Pencil} className='h-20 w-20 object-cover' />
          <input
            ref={fileInputRef}
            type='file'
            id='imageUpload'
            accept='image/*'
            onChange={handleFileSelect}
            className='hidden'
          />
        </button>
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
