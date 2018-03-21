import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import authReducer from '../containers/auth/reducer_auth.js'
import pagesReducer from '../containers/pages/reducer_pages.js'

export default combineReducers({
  form,
  auth: authReducer,
  pages: pagesReducer,
})
