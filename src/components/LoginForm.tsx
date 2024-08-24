import { useState, useEffect } from 'react';
import Input from './Input';
import toast from 'react-hot-toast';
import { getSession, setSession } from 'utils/handleSession';
import { signInUser } from 'services/apis';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const toSignUp = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate('/sign_up');
  };

  const session = getSession();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session) {
      toast.success('이미 로그인되어 있습니다.');
      return ;
    }
  }, [session]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (session) {
      toast.error('이미 로그인된 상태입니다.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await signInUser();
      setSession({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
        id: response.id,
      });
      toast.success('로그인에 성공했습니다!');
      navigate('/')
    } catch (error) {
      toast.error('로그인에 실패했습니다. \n 이메일과 비밀번호를 확인하세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className='absolute top-[415px]'>
        <div className='mt-10 absolute justify-center'>
          <form method='POST' className='' onSubmit={handleLogin}>
            <div className='px-[34px]'>
              <div className='pb-[10px]'>
                <Input
                  placeholder='이메일'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
              </div>
              <div>
                <Input
                  placeholder='비밀번호'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                />
              </div>

              <div className='pt-80'>
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
                      textColor='text-[#FFFFFF]'
                      onClick={handleLogin}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
