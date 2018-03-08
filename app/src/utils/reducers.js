import { combineReducers } from 'redux'
import postsReducer from '../containers/posts/reducer.js'
import expressReducer from '../containers/homePage/reducer.js'

export default combineReducers({
  express: expressReducer,
  posts: postsReducer
})
