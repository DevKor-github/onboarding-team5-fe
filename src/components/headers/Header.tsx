import Logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex h-40 w-full shrink-0 items-center px-20'>
      <Link to='/'>
        <img src={Logo} alt='메인 로고' />
      </Link>
    </header>
  );
};

export default Header;
