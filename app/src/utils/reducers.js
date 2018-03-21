import { combineReducers } from 'redux';
import expressReducer from '../containers/home/reducers_home';

export default combineReducers({
  express: expressReducer,
});
