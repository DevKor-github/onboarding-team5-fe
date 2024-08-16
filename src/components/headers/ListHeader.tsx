import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { Link } from 'react-router-dom';

const ListHeader = () => {
  return (
    <div className='flex h-48 shrink-0 items-center justify-between px-24'>
      <span className='text-18 font-600'>채팅</span>
      <Link to='/profile' className='h-28 w-28 overflow-hidden rounded-full'>
        <img src={DefaultProfileImage} className='h-full w-full object-cover' />
      </Link>
    </div>
  );
};

export default ListHeader;
