import ArrowLeft from 'assets/icons/arrow-left.svg';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}

const ChatHeader = ({ title }: Props) => {
  return (
    <header className='flex h-56 items-center justify-between border-b border-gray-700 px-12'>
      <Link to='/'>
        <img src={ArrowLeft} />
      </Link>
      <h1 className='text-20 font-600'>{title}</h1>
      <div />
    </header>
  );
};

export default ChatHeader;
