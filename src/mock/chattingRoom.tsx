import { ChattingRoomType } from 'types/client.types';

export const MOCK_CHATTING_ROOM: ChattingRoomType[] = [
  {
    user: { id: 1, name: '엄태건' },
    lastChat: '안녕하세요',
    time: '오후 8:00',
  },
  {
    user: { id: 2, name: '심서현' },
    lastChat: '안녕하세요2',
    time: '오전 8:00',
  },
  {
    user: { id: 3, name: '임건우' },
    lastChat:
      '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
    time: '오후 7:00',
  },
];
