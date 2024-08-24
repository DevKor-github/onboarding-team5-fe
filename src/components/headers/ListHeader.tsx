import { useQuery } from '@tanstack/react-query';
import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { Link } from 'react-router-dom';
import { getProfile } from 'services/apis';
import { ProfileType } from 'types/client.types';
import { getSession } from 'utils/handleSession';

const ListHeader = () => {
  const session = getSession();

  const { data: profile } = useQuery({
    queryKey: ['my-profile'],
    queryFn: () => getProfile<ProfileType>(session?.id),
    enabled: !!session?.id,
  });
  return (
    <div className='flex h-48 shrink-0 items-center justify-between px-24'>
      <span className='text-18 font-600'>채팅</span>
      <Link to='/profile' className='h-28 w-28 overflow-hidden rounded-full'>
        <img
          src={profile?.profileImagePath || DefaultProfileImage}
          className='h-full w-full object-cover'
        />
      </Link>
    </div>
  );
};

export default ListHeader;
