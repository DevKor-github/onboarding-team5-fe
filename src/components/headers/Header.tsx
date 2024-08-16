import Logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import { signInUser } from 'services/apis';
import { setSession } from 'utils/handleSession';

const Header = () => {
  const handleSignIn = async () => {
    const session = await signInUser();
    console.log(session);
    setSession(session);
  };
  return (
    <header className='flex h-40 w-full shrink-0 items-center px-20'>
      <Link to='/'>
        <img src={Logo} alt='메인 로고' />
      </Link>
      <button
        onClick={handleSignIn}
        className='ml-auto rounded-4 border border-gray-600 px-4'
      >
        로그인
      </button>
    </header>
  );
};

export default Header;
