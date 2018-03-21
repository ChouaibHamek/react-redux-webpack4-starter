import {
  AUTHENTICATE,
  UNAUTHENTICATE,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
} from './actions_auth'

export default function authReducer(state= {}, action) {
  switch(action.type) {
    case AUTHENTICATE:
      return { ...state, authenticated: true }
    case UNAUTHENTICATE:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
