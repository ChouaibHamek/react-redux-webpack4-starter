import { combineReducers } from 'redux'
import expressReducer from '../containers/homePage/reducer'

export default combineReducers({
  express: expressReducer,
})
