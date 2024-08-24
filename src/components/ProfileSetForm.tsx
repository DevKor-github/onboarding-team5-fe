import axios from 'axios';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Input from './Input';
import { getSession } from 'utils/handleSession';
import { ProfileType } from 'types/client.types';
import toast from 'react-hot-toast';

const ProfileSetForm = () => {
  const session = getSession();
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [nickname, setNickname] = useState('');
  const [intro, setIntro] = useState('');
  const [profilePic, setProfilePic] = useState<string | null>(null);

  // 프로필 이미지 업로드 처리
  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // 프로필 정보 제출 처리
  const handleSubmit = async () => {
    try {
      // 프로필 정보를 서버에 전송
      const profileData: ProfileType = {
        name: nickname,
        introduction: intro,
        profileImagePath: profilePic || '',
      };

      await axios.post('/api/profile', profileData, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      });

      // 프로필 설정 후 /profile 페이지로 이동
      navigate('/profile', { state: { profile: profileData } });
    } catch (error) {
      console.error('프로필 생성 실패:', error);
      toast.error('프로필 생성 실패');
    }
  };

  return (
    <div className='relative top-120'>
      <div>
        <div className='mt-2 gap-x-3 flex items-center justify-center '>
          <div>
            {profilePic ? (
              <img
                src={profilePic}
                alt='Profile'
                className='h-200 w-200 rounded-full object-cover  shadow-sm shadow-slate-500 '
              />
            ) : (
              <svg
                className='h-200 w-200 text-gray-300'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  clipRule='evenodd'
                />
              </svg>
            )}
          </div>
        </div>

        <div className='flex justify-center py-[15px]'>
          <button
            type='button'
            className='rounded-md px-2.5 py-1.5 text-sm font-semibold rounded-16 bg-violet-400 px-8 py-4 align-middle text-[#FFFFFF] shadow-sm hover:bg-violet-300 '
            onClick={handleFileUploadClick}
          >
            Change
          </button>
          <input
            type='file'
            ref={fileInputRef}
            className='hidden'
            accept='image/*'
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className='relative top-24'>
        <div className='flex justify-center gap-[10px] '>
          <div>
            <Input
              placeholder='name'
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
        </div>

        <div className='pt-[26px]'>
          <label className='text-sm font-medium block pl-24 pt-20 leading-6 text-gray-900'>
            한 줄 소개
          </label>
          <div className='flex justify-center pt-12'>
            <textarea
              className='rounded-md py-1.5 focus: placeholder:text-gray-40 h-50 block w-[325px]
                                    rounded-8 border-0 pl-8 pt-[7px] text-gray-900  shadow-sm   outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500'
              onChange={(e) => setIntro(e.target.value)}
            ></textarea>
          </div>

          <div className='pt-44'>
            <div className='flex justify-center pt-12'>
              <Button
                label='완료'
                defaultColor='bg-[#3D3D3D]'
                height='h-[51px]'
                width='w-[325px]'
                textColor='text-[#FFFFFF]'
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetForm;
