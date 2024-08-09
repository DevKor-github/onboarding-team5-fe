import ArrowUp from 'assets/icons/arrow-up.svg';

const ChatInput = () => {
  return (
    <div className='absolute bottom-0 flex h-52 w-full items-center gap-8 bg-[#424242] p-8'>
      <input className='h-full w-full rounded-full border border-[#3f3f3f] bg-[#505050] px-12 outline-none' />
      <button className='flex aspect-square h-full items-center justify-center rounded-full border border-[#3f3f3f] bg-[#717171]'>
        <img src={ArrowUp} />
      </button>
    </div>
  );
};

export default ChatInput;
