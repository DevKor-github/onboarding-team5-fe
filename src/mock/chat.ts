import { ChatType } from 'types/client.types';

export const MOCK_CHAT: ChatType[] = [
  {
    user: { id: 1, nickname: '제이지' },
    value: '안녕하세요',
  },
  {
    user: { id: 1, nickname: '제이지' },
    value: '안녕하세요2',
  },
  {
    user: { id: 1, nickname: '제이지' },
    value: '안녕하세요3',
  },
  {
    user: { id: 1, nickname: '제이지' },
    value: '안녕하세요4',
  },
  {
    user: {
      id: 2,
      nickname: '강아지',
      profileImage:
        'https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png',
    },
    value: '안녕하세요4',
  },
];
