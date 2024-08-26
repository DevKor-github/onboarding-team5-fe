import Button from './Button';
import Input from './Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession } from 'utils/handleSession';
import toast from 'react-hot-toast';
import { signInUser, signUpUser } from 'services/apis';
import Logo from 'assets/images/Vector.jpg';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // 비밀번호 유효성 검사

  const navigate = useNavigate();

  const validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!validatePassword(password)) {
      toast.error('비밀번호는 특수문자와 영어 조합으로 \n 8자 이상이어야 합니다.');
      return;
    }
    try {
      await signUpUser({ name, email, password });
      const session = await signInUser({ email, password });

      setSession(session);

      navigate('/profile_set');
    } catch (error) {
      console.error('회원가입 실패:', error);
      toast.error('회원가입에 실패했습니다. \n 다시 시도해 주세요.');
    }
  };

  return (
    <div>
      <div className='absolute top-[253px] flex pl-[71px]'>
        <img src={Logo} className='h-[51px] pr-[6px]' />
        <div className='h-48 w-[176px] text-center font-sans text-[39px] font-[700] text-[#505156]'>
          DEVKOR
        </div>
      </div>
      <div className='absolute top-[363.12px] pl-[24px] text-[18px] font-[600] text-[#2C2C2E]'>
        회원가입
      </div>
      <div className='absolute top-[440px]'>
        <div className='mt-10 absolute justify-center'>
          <form method='POST' className='' onSubmit={handleSignUp}>
            <div className='px-[34px]'>
              <div className='pt-[20px]'>
                <Input
                  placeholder='이름'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='pt-[15px]'>
                <Input
                  placeholder='이메일'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className='pt-[15px]'>
                <Input
                  placeholder='비밀번호'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='relative top-[80px] flex justify-center'>
              <Button
                label='회원가입'
                defaultColor='bg-[#3D3D3D]'
                height='h-[51px]'
                width='w-[325px]'
                textColor='text-[#FFFFFF]'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
