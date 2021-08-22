import { combineReducers } from 'redux';

import request from './request/reducer';
import favorites from './favorites/reducer';

export default combineReducers({
  request,
  favorites,
});
