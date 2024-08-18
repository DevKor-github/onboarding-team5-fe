import { useNavigate } from 'react-router-dom';
import '../style/ProfileSet.css';
import { useRef, useState } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import Button from 'components/Button';
import axios from 'axios';
// import PickYourTaste from 'components/PickYourTaste';

const ProfileSet = () => {
  const [nickname, setNickname] = useState('');
  const [intro, setIntro] = useState('');
  const [profile_pic, setProfile_pic] = useState<string | null>(null);

  const navigate = useNavigate();

  // const test = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   navigate('/test');
  // };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
        setProfile_pic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      nickname: nickname,
      inro: intro,
      profile_pic: profile_pic,
    };

    try {
      const response = await axios.post('/api/update-profile', formData);

      const { accessToken, refreshToken } = response.data;
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);


      if (response.status === 200) {
        navigate('/test');
      }
    } catch (error) {
      console.error('프로필 설정 중 오류 발생:', error);
      alert('프로필 설정에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <Page>
      <div className='relative top-120'>
        <div className='mt-2 gap-x-3 flex items-center justify-center '>
          <div>
            {profile_pic ? (
              <img
                src={profile_pic}
                alt='Profile'
                className='h-120 rounded-full object-cover'
              />
            ) : (
              <svg
                className='h-120 w-120 text-gray-300'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fill-rule='evenodd'
                  d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  clip-rule='evenodd'
                />
              </svg>
            )}
          </div>
        </div>

        <div className='flex justify-center py-4'>
          <button
            type='button'
            className='rounded-md px-2.5 py-1.5 text-sm font-semibold rounded-16 bg-violet-400 px-8 py-4 align-middle shadow-sm hover:bg-violet-300 '
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
          />{' '}
        </div>

        <div className='relative top-24'>
          <div className='flex justify-center gap-[10px] '>
            <div>
              <Input
                placeholder='닉네임'
                required={true}
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className='pt-[26px]'>
          <label className='text-sm font-medium block pl-24 pt-20 leading-6 text-gray-900'>
            About you
          </label>
          <div className='flex justify-center pt-12'>
            <textarea
              className='rounded-md py-1.5 focus: placeholder:text-gray-40 block h-120 w-[325px]
                                    rounded-8 border-0 pl-8 pt-[7px] text-gray-900  shadow-sm   outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500'
              onChange={(e) => setIntro(e.target.value)}
            ></textarea>
          </div>

          {/* <PicYourTaste /> */}

          <div className='pt-44'>
            <div className='flex justify-center pt-12'>
              <Button
                label='완료'
                defaultColor='bg-[#3D3D3D]'
                height='h-[51px]'
                width='w-[325px]'
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProfileSet;
