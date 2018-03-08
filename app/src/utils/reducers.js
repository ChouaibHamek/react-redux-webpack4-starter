import { combineReducers } from 'redux'
import postsReducer from '../containers/posts/posts_reducer.js'

export default combineReducers({
  posts: postsReducer
})
