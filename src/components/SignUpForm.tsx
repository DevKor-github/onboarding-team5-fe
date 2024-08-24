import axios from 'axios';
import Button from './Button';
import Input from './Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setSession } from 'utils/handleSession';
import toast from 'react-hot-toast';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/signup', { name, email, password });
      
      setSession({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
        id: response.data.myId,
        
      });
      

      navigate('/profile_set');
    } catch (error) {
      console.error('회원가입 실패:', error);
      toast.error('회원가입에 실패했습니다. \n 다시 시도해 주세요.')
    }
  };

  return (
    <div>
      <div className='absolute top-[253px] flex pl-[71px]'>
        <img src='src\assets\images\Vector.jpg' className='h-[51px] pr-[6px]' />
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
                <Input placeholder='이름' value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className='pt-[15px]'>
                <Input placeholder='이메일' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className='pt-[15px]'>
                <Input placeholder='비밀번호' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
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
