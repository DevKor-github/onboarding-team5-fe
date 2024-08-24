import Logo from 'assets/icons/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { removeSession } from 'utils/handleSession';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    removeSession();
    navigate('/login');
  };
  return (
    <header className='flex h-40 w-full shrink-0 items-center px-20'>
      <Link to='/'>
        <img src={Logo} alt='메인 로고' />
      </Link>
      <button
        onClick={handleLogout}
        className='ml-auto rounded-4 border border-gray-500 px-4 text-gray-500'
      >
        로그아웃
      </button>
    </header>
  );
};

export default Header;
