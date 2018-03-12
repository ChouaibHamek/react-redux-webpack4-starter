import { combineReducers } from 'redux'
import postsReducer from '../containers/posts/reducer'
import expressReducer from '../containers/homePage/reducer'

export default combineReducers({
  express: expressReducer,
  posts: postsReducer,
})
