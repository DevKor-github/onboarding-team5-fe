import DefaultProfileImage from 'assets/images/default-profile.jpg';
import { ChatType } from 'types/client.types';
import BubbleTip from 'assets/icons/bubble-tip.svg';
import MyBubbleTip from 'assets/icons/my-bubble-tip.svg';

interface Props {
  chat: ChatType;
  isMyChat: boolean;
  isRepeated: boolean;
}

const Chat = ({ chat, isMyChat, isRepeated }: Props) => {
  return (
    <>
      {isMyChat ? (
        <MyBubble chat={chat} isRepeated={isRepeated} />
      ) : (
        <div className='flex w-full gap-20'>
          {isRepeated ? (
            <div className='w-32' />
          ) : (
            <button className='h-32 w-32 overflow-hidden rounded-full'>
              <img
                src={chat.user.profileImage ?? DefaultProfileImage}
                className='h-full w-full object-cover'
              />
            </button>
          )}
          <Bubble chat={chat} isRepeated={isRepeated} />
        </div>
      )}
    </>
  );
};

export default Chat;

const Bubble = ({ chat, isRepeated }: Omit<Props, 'isMyChat'>) => {
  return (
    <div className='relative min-w-96 max-w-256'>
      {!isRepeated && <img src={BubbleTip} className='absolute -left-8' />}
      <div
        className={`flex w-full flex-col gap-4 rounded-[6px] bg-[#F2F2F7] px-8 py-4 ${isRepeated ? '' : 'rounded-tl-none'}`}
      >
        <div className='font-600'>{chat.user.name}</div>
        <div>{chat.value}</div>
        <div className='text-right text-12 text-[#666668]'>{chat.time}</div>
      </div>
    </div>
  );
};

const MyBubble = ({ chat, isRepeated }: Omit<Props, 'isMyChat'>) => {
  return (
    <div className='relative ml-auto mr-8 min-w-96 max-w-256'>
      {!isRepeated && <img src={MyBubbleTip} className='absolute -right-8' />}
      <div
        className={`flex w-full flex-col gap-4 rounded-[6px] bg-[#3189F0] px-8 py-4 text-white ${isRepeated ? '' : 'rounded-tr-none'}`}
      >
        <div>{chat.value}</div>
        <div className='text-right text-12'>{chat.time}</div>
      </div>
    </div>
  );
};
