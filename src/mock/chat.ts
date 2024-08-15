import { ChatType } from 'types/client.types';
import { MOCK_PROFILE } from './profile';

export const MOCK_CHATS: ChatType[] = [
  {
    user: MOCK_PROFILE,
    value: '안녕하세요',
    time: '오전 11:46',
  },
  {
    user: { id: 1, name: '임건우' },
    value: '안녕하세요',
    time: '오전 11:46',
  },
  {
    user: { id: 1, name: '임건우' },
    value:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    time: '오전 11:46',
  },
  {
    user: MOCK_PROFILE,
    value: '안녕하세요',
    time: '오전 11:46',
  },
  {
    user: MOCK_PROFILE,
    value:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    time: '오전 11:46',
  },
];
