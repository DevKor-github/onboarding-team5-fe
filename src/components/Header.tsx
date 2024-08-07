import DefaultProfileImage from 'assets/images/default-profile.jpg';

const Header = () => {
  return (
    <header className='flex h-56 items-center justify-between border border-black px-8'>
      <h1 className='text-20 font-600'>MOVIE</h1>
      <button className='relative h-36 w-36 overflow-hidden rounded-full'>
        <img src={DefaultProfileImage} className='h-full w-full object-cover' />
      </button>
    </header>
  );
};

export default Header;
