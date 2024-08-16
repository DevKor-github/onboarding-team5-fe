import '../style/Signup.css';
import Page from 'components/Page';
import Input from 'components/Input';
import Button from 'components/Button';
import ImageUpload from 'components/ImageUpload';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const test = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/test');
  };

  return (
    <Page>
      <div>
        <div className='absolute top-[253px] flex pl-[71px]'>
          <img src='src\images\Vector.jpg' className='h-[51px] pr-[6px]' />
          <div className='h-48 w-[176px] text-center font-sans text-[39px] font-[700] text-[#505156] '>
            DEVKOR
          </div>
        </div>
        <div className='absolute top-[363.12px] pl-[24px] text-[18px] font-[600] text-[#2C2C2E]'>
          회원가입
        </div>
        <div className='absolute top-[415px]'>
          <div className='mt-10 absolute justify-center'>
            <form method='POST' className=''>
              <div className='px-[34px]'>
                <div className='pb-[10px]'>
                  <Input placeholder='아이디' required={true} />
                </div>

                <div className='pb-[10px]'>
                  <Input
                    placeholder='비밀번호'
                    required={true}
                    type='password'
                  />
                </div>

                <div className='pb-[10px]'>
                  <Input
                    placeholder='비밀번호 확인'
                    required={true}
                    type='password'
                  />
                </div>

                <ImageUpload />
              </div>
              <div className='flex justify-center pt-[35px]'>
                <Button
                  label='회원가입'
                  defaultColor='bg-[#3D3D3D]'
                  height='h-[51px]'
                  width='w-[325px]'
                  onSubmit={test}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default SignUp;
