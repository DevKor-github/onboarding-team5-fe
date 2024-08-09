import { MovieType } from 'types/client.types';
import Tag from './Tag';
import ArrowRight from 'assets/icons/arrow-right.svg';
import { Link } from 'react-router-dom';

interface Props {
  movie: MovieType;
}

const ChattingRoom = ({ movie }: Props) => {
  return (
    <Link
      to={`/${movie.id}`}
      className='flex h-120 w-full items-center gap-16 px-16 py-8 hover:bg-[#282828]'
    >
      <div className='relative h-full w-80 overflow-hidden rounded-8'>
        <img src={movie.image} className='h-full w-full object-cover' />
      </div>
      <div className='flex flex-col gap-4'>
        <div className='text-18 font-500'>{movie.title}</div>
        <div className='flex gap-4'>
          {movie.genre.map((e) => (
            <Tag type='genre' value={e} />
          ))}
          {movie?.keyword?.map((e) => <Tag type='keyword' value={e} />)}
        </div>
      </div>
      <div className='ml-auto'>
        <img src={ArrowRight} />
      </div>
    </Link>
  );
};

export default ChattingRoom;
