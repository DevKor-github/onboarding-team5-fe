import { useNavigate } from 'react-router-dom';
import '../style/ProfileSet.css';
import TastePicker from 'components/TastePicker';
import { useRef, useState } from 'react';
import Page from 'components/Page';
import Input from 'components/Input';
import Button from 'components/Button';
import PicYourTaste from 'components/PickYourTaste';

const ProfileSet = () => {
  const navigate = useNavigate();

  const test = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/test');
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('Selected file:', file);
    }
  };

  const defaultImages = ['/images/logo-email.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(defaultImages[0]);

  const handleNextImage = () => {
    const newIndex = (currentImageIndex + 1) % defaultImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(defaultImages[newIndex]);
  };

  const handlePreviousImage = () => {
    const newIndex =
      (currentImageIndex - 1 + defaultImages.length) % defaultImages.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(defaultImages[newIndex]);
  };

  return (
    <Page>
      <div className='relative top-120'>
        <div className='mt-2 gap-x-3 flex items-center justify-center '>
          <svg
            className='h-120 text-gray-300'
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
              <Input placeholder='닉네임' required={true} type='' />
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
                onSubmit={test}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ProfileSet;
