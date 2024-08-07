import { MovieType } from 'types/client.types';

interface Props {
  movie: MovieType;
}

const ChattingRoom = ({ movie }: Props) => {
  return <div className='h-80 w-full rounded-8 border border-black'>hello</div>;
};

export default ChattingRoom;
