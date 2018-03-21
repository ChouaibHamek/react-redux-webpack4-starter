import { FETCH_MESSAGE } from './actions_pages'

export default function pagesReducer(state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGE:
      return { ...state, secretMessage: action.payload.message }
    default:
      return state
  }
}
