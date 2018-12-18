import { combineReducers } from 'redux';
import { get } from 'lodash';

import data from './data';

export const getChats = state => get(state, 'data.chats');

export default combineReducers({
  data,
});
