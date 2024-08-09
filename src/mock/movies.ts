import { MovieType } from 'types/client.types';
import PosterDeadpool from 'assets/images/mock-deadpool.jpg';
import PosterPilot from 'assets/images/mock-pilot.jpg';
import PosterRevolver from 'assets/images/mock-revolver.jpg';
import PosterVictory from 'assets/images/mock-victory.jpg';
import PosterHappiness from 'assets/images/mock-happiness.jpg';
import PosterAlien from 'assets/images/mock-alien.jpg';

export const MOCK_MOVIES: MovieType[] = [
  {
    title: '데드풀과 울버린',
    image: PosterDeadpool,
    genre: ['액션', '코미디', 'SF'],
    keyword: ['청소년관람불가', '마블'],
  },
  {
    title: '파일럿',
    image: PosterPilot,
    genre: ['코미디'],
    keyword: ['한국'],
  },
  {
    title: '리볼버',
    image: PosterRevolver,
    genre: ['범죄'],
    keyword: ['한국'],
  },
  {
    title: '빅토리',
    image: PosterVictory,
    genre: ['드라마'],
    keyword: ['한국'],
  },
  {
    title: '행복의 나라',
    image: PosterHappiness,
    genre: ['드라마'],
    keyword: ['한국'],
  },
  {
    title: '에이리언- 로물루스',
    image: PosterAlien,
    genre: ['SF'],
    keyword: ['미국', '영국'],
  },
];
