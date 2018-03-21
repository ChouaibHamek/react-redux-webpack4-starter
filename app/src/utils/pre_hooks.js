import { AUTHENTICATE } from '../containers/auth/actions_auth'

export default function (store) {
  const token = localStorage.getItem('token')
  if (token) {
    store.dispatch({ type: AUTHENTICATE })
  }
  return store
}
