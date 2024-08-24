import DefaultProfileImage from 'assets/images/default-profile.jpg';
import BubbleTip from 'assets/icons/bubble-tip.svg';
import MyBubbleTip from 'assets/icons/my-bubble-tip.svg';
import { MessageType, UserType } from 'types/client.types';
import { parseDate } from 'utils/parseDate';

interface Props {
  message: MessageType;
  receiver: UserType | undefined;
  isMyChat: boolean;
  isRepeated: boolean;
}

const Chat = ({ message, receiver, isMyChat, isRepeated }: Props) => {
  return (
    <>
      {isMyChat ? (
        <MyBubble message={message} isRepeated={isRepeated} />
      ) : (
        <div className='flex w-full gap-20'>
          {isRepeated ? (
            <div className='w-32' />
          ) : (
            <button className='h-32 w-32 overflow-hidden rounded-full'>
              <img
                src={receiver?.profileImagePath ?? DefaultProfileImage}
                className='h-full w-full object-cover'
              />
            </button>
          )}
          <Bubble
            message={message}
            receiver={receiver}
            isRepeated={isRepeated}
          />
        </div>
      )}
    </>
  );
};

export default Chat;

interface BubbleProps {
  message: MessageType;
  receiver: UserType | undefined;
  isRepeated: boolean;
}

const Bubble = ({ message, receiver, isRepeated }: BubbleProps) => {
  const parsedDate = parseDate(message.createdAt);
  return (
    <div className='relative min-w-96 max-w-256'>
      {!isRepeated && <img src={BubbleTip} className='absolute -left-8' />}
      <div
        className={`flex w-full flex-col gap-4 rounded-[6px] bg-[#F2F2F7] px-8 py-4 ${isRepeated ? '' : 'rounded-tl-none'}`}
      >
        <div className='font-600'>{receiver?.name}</div>
        <div>{message.content}</div>
        <div className='text-right text-12 text-[#666668]'>{parsedDate}</div>
      </div>
    </div>
  );
};

const MyBubble = ({ message, isRepeated }: Omit<BubbleProps, 'receiver'>) => {
  const parsedDate = parseDate(message.createdAt);
  return (
    <div className='relative ml-auto mr-8 min-w-96 max-w-256'>
      {!isRepeated && <img src={MyBubbleTip} className='absolute -right-8' />}
      <div
        className={`flex w-full flex-col gap-4 rounded-[6px] bg-[#3189F0] px-8 py-4 text-white ${isRepeated ? '' : 'rounded-tr-none'}`}
      >
        <div>{message.content}</div>
        <div className='text-right text-12'>{parsedDate}</div>
      </div>
    </div>
  );
};
