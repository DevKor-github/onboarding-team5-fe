import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Login.css';
import Page from 'components/Page';
import Button from 'components/Button';
import Input from 'components/Input';
import axios from 'axios';
// import { TEST_ACCOUNT } from 'mock/profile';

// const TEST_ACCOUNT = {
//   email: 'test@gmail.com',
//   password: 'abcd1234',
// };

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginResult, setLoginResult] = useState('');

  const toSignUp = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/sign_up');
  };
  const handleLogin = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // if (email === TEST_ACCOUNT.email && password === TEST_ACCOUNT.password) {
    //   // 로그인 성공 시
    //   setLoginResult('로그인 성공!');
    //   sessionStorage.setItem('accessToken', 'dummyAccessToken'); // 임의의 토큰 저장
    //   sessionStorage.setItem('nickname', 'TestUser'); // 임의의 닉네임 저장
    //   navigate('/test'); // 로그인 성공 후 페이지 이동
    // } else {
    //   // 로그인 실패 시
    //   setLoginResult('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
    //   console.log('failed')
    // }

    // 로그인에 필요한 데이터
    const formData = {
      email: email,
      password: password,
    };

    try {
      // 서버로 로그인 데이터 전송
      const response = await axios.post('/auth/login', formData);
      const data: { accessToken: string; refreshToken: string; myId: number } =
        response.data;
      return {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        id: data.myId,
      };
    } catch (error) {
      console.error('Error during login:', error);
      setLoginResult('Login failed'); // 로그인 실패 메시지 설정
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

        <div className='absolute top-[363.12px] pl-[24px] text-[18px] font-[600] text-[#2C2C2E]'>
          로그인
        </div>

        <div className='absolute top-[415px]'>
          <div className='mt-10 absolute justify-center'>
            <form method='POST' className=''>
              <div className='px-[34px]'>
                <div className='pb-[10px]'>
                  <Input
                    placeholder='이메일'
                    type='email'
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Input
                    placeholder='비밀번호'
                    required={true}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                onClick={toSignUp}
              />
            </div>
            <div>
              <Button
                label='로그인'
                defaultColor='bg-[#3D3D3D]'
                height='h-[51px]'
                width='w-[155px]'
                onClick={handleLogin}
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Login;
