import { invoke } from '@/redux/api';
import { handleActions } from 'redux-actions';
const API_URL = '';

const CHAT_LIST = [
  { id: 1, title: 'chat1' },
  { id: 2, title: 'chat2' },
  { id: 3, title: 'chat3' },
  { id: 4, title: 'chat4' },
  { id: 5, title: 'chat5' },
  { id: 6, title: 'chat6' },
];

export const fetchChats = () =>
  invoke({
    endpoint: `${API_URL}/chats`,
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    types: [
      'chat/FETCH_CHAT_LIST_REQUEST',
      'chat/FETCH_CHAT_LIST_SUCCESS',
      'chat/FETCH_CHAT_LIST_FAILURE',
    ],
  });

export default handleActions(
  {
    'chat/FETCH_CHAT_LIST_SUCCESS': () => CHAT_LIST,
  },
  []
);
