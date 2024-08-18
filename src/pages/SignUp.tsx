import '../style/Signup.css';
import Page from 'components/Page';
import Input from 'components/Input';
import Button from 'components/Button';
// import ImageUpload from 'components/ImageUpload';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ImageUpload_Proto from 'components/ImageUploader_proto';
import axios from 'axios';

const SignUp = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [confirm, setConfirm] = useState('');

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다. 다시 확인해주세요.');
      return;
    }

    const formData = {
      name: name,
      email: email,
      password: password,
      nickname: nickname,
      confirm: confirm,
    };

    try {
      // 서버로 회원가입 데이터 전송
      const response = await axios.post('/auth/signup', formData);

      // 서버로부터 accessToken과 refreshToken을 받아서 저장
      const { accessToken, refreshToken } = response.data;
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);

      // 프로필 설정 페이지로 이동
      navigate('/profile_set');
    } catch (error) {
      console.error('회원가입 중 오류 발생:', error);
      setError('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  //  const toProfileSet = (event: React.FormEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  //   navigate('/profile_set');
  // };

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
                  <Input
                    placeholder='이름'
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className='pb-[10px]'>
                  <Input
                    placeholder='이메일'
                    required={true}
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div className='pb-[10px]'>
                  <Input
                    placeholder='닉네임'
                    required={true}
                    onChange={(e) => setNickname(e.target.value)}
                    value={nickname}
                  />
                </div>

                <div className='pb-[10px]'>
                  <Input
                    placeholder='비밀번호'
                    required={true}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className='pb-[10px]'>
                  <Input
                    placeholder='비밀번호 확인'
                    required={true}
                    type='password'
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                  />
                </div>

                {/* <ImageUpload /> */}

                <ImageUpload_Proto />
              </div>
              <div className='flex justify-center pt-[20px]'>
                <Button
                  label='회원가입'
                  defaultColor='bg-[#3D3D3D]'
                  height='h-[51px]'
                  width='w-[325px]'
                  onClick={handleSubmit}
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
