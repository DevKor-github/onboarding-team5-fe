import React, { useEffect, useRef, useState } from 'react';

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [boxHeight, setBoxHeight] = useState<number>(50);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className=''>
      <div
        className={`focus: placeholder:text-gray-40 text-c
                  block w-[325px]
                                    rounded-[10px] border-[1px] border-solid
                                    border-[#D9D9D9] bg-[#F4F4F4] px-[14px] py-[14px] 
                                    text-gray-900`}
      >
        <label htmlFor='profile-upload' className='cursor-pointer'>
          <div>
            {selectedImage ? (
              <img
                src={selectedImage}
                
                
              />
            ) : (
              <div className='flex'>
                <div className='pt-[2px]'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                  >
                    <path
                      d='M10.875 3H7.125L5.25 5.25H3C2.60218 5.25 2.22064 5.40804 1.93934 5.68934C1.65804 5.97064 1.5 6.35218 1.5 6.75V13.5C1.5 13.8978 1.65804 14.2794 1.93934 14.5607C2.22064 14.842 2.60218 15 3 15H15C15.3978 15 15.7794 14.842 16.0607 14.5607C16.342 14.2794 16.5 13.8978 16.5 13.5V6.75C16.5 6.35218 16.342 5.97064 16.0607 5.68934C15.7794 5.40804 15.3978 5.25 15 5.25H12.75L10.875 3Z'
                      stroke='#D9D9D9'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                    <path
                      d='M9 12C10.2426 12 11.25 10.9926 11.25 9.75C11.25 8.50736 10.2426 7.5 9 7.5C7.75736 7.5 6.75 8.50736 6.75 9.75C6.75 10.9926 7.75736 12 9 12Z'
                      stroke='#D9D9D9'
                      stroke-width='1.5'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </div>

                <div className='pl-[10px] font-[16px] text-[#D9D9D9] '>
                  프로필 이미지
                </div>
              </div>
            )}
            <input
              id='profile-upload'
              type='file'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
