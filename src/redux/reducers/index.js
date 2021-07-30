import count from './count';
import person from './person';
//从redux中引入combineReduces
import { combineReducers } from 'redux';
export default combineReducers({ count, person })