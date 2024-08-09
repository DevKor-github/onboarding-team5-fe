import DefaultProfileImage from 'assets/images/default-profile.jpg';

const ListHeader = () => {
  return (
    <header className='flex h-56 items-center justify-between border-b border-gray-700 bg-[#181818] px-20'>
      <h1 className='text-20 font-600'>MOVIE</h1>
      <button className='relative h-28 w-28 overflow-hidden rounded-full'>
        <img src={DefaultProfileImage} className='h-full w-full object-cover' />
      </button>
    </header>
  );
};

export default ListHeader;
