import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { Link } from 'react-router-dom';

const ListHeader = () => {
  return (
    <header className='flex h-56 items-center justify-between border-b border-gray-100 px-20'>
      <Link to='/' className='text-20 font-600'>
        MOVIE
      </Link>
      <button className='relative h-28 w-28 overflow-hidden rounded-full'>
        <img src={DefaultProfileImage} className='h-full w-full object-cover' />
      </button>
    </header>
  );
};

export default ListHeader;
