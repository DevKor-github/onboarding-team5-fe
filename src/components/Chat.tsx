import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { ChatType } from 'types/client.types';

interface Props {
  chat: ChatType;
  hideProfile?: boolean;
  isMyChat?: boolean;
}

const Chat = ({ chat, hideProfile = false, isMyChat = false }: Props) => {
  return (
    <>
      {isMyChat ? (
        <p className='ml-auto max-w-300 rounded-8 bg-[#414141] px-8 py-4'>
          {chat.value}
        </p>
      ) : (
        <div className={`flex max-w-300 gap-12 ${hideProfile ? '' : 'mt-4'}`}>
          {hideProfile ? (
            <div className='w-32' />
          ) : (
            <button className='relative h-32 w-32 overflow-hidden rounded-12'>
              <img
                src={chat.user?.profileImage ?? DefaultProfileImage}
                alt='프로필 이미지'
                className='h-full w-full object-cover'
              />
            </button>
          )}
          <div>
            {!hideProfile && (
              <div className='text-12 text-gray-400'>{chat.user.nickname}</div>
            )}
            <p className='rounded-8 bg-[#414141] px-8 py-4'>{chat.value}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
