import Page from 'components/Page';
import LoginForm from 'components/LoginForm';
import Logo from 'assets/images/Vector.jpg';

const Login = () => {
  return (
    <Page>
      <div className='absolute top-[253px] flex pl-[71px]'>
        <img src={Logo} className='h-[51px] pr-[6px]' />
        <div className='h-48 w-[176px] text-center font-sans text-[39px] font-[700] text-[#505156] '>
          DEVKOR
        </div>
      </div>

      <div className='absolute top-[363.12px] pl-[24px] text-[18px] font-[600] text-[#2C2C2E]'>
        로그인
      </div>
      <LoginForm />
    </Page>
  );
};

export default Login;
