import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import Page from 'components/Page';
import Button from 'components/Button';
import Input from 'components/Input';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/sign_up');
  };

  const handleLogin = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (username && password) {
      console.log('로그인 성공');
      navigate('/test'); // 로그인 성공 후 이동할 페이지로 navigate
    } else {
      console.log('로그인 실패');
      // 로그인 실패 시의 처리 로직 (예: 경고 메시지 표시)
    }
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

        <div className='absolute top-[363.12px] pl-[24px] text-[18px] font-[600] text-[#2C2C2E]'>로그인</div>

        <div className='absolute top-[415px]'>
          <div className='mt-10 absolute justify-center'>
            <form method='POST' className=''>
              <div className='px-[34px]'>
                <div className='pb-[10px]'>
                  <Input placeholder='아이디' required={true} />
                </div>
                <div>
                  <Input
                    placeholder='비밀번호'
                    required={true}
                    type='password'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='absolute top-[584px] px-[34px]'>
          <div className='flex justify-center gap-[10px] '>
            <div>
              <Button
                label='회원가입'
                defaultColor='bg-[#F2F2F7]'
                textColor='text-[#3D3D3D]'
                height='h-[51px]'
                width='w-[155px]'
                onSubmit={handleSignup}
              />
            </div>
            <div>
              <Button
                label='로그인'
                defaultColor='bg-[#3D3D3D]'
                height='h-[51px]'
                width='w-[155px]'
                onSubmit={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login;
