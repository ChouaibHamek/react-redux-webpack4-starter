import axios from 'axios'

export const AUTHENTICATE = 'AUTHENTICATE'
export const UNAUTHENTICATE = 'UNAUTHENTICATE'
export const AUTH_ERROR = 'AUTH_ERROR'

export const ROOT_URL = 'http://localhost:3090'

export function signinAction({ email, password, history }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then( response => {
        dispatch({ type: AUTHENTICATE })
        localStorage.setItem('token', response.data.token)
        history.push('/secret-page')
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signUpAction({ email, password, history }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then( response => {
        dispatch({ type: AUTHENTICATE })
        localStorage.setItem('token', response.data.token)
        history.push('/secret-page')
      })
      .catch(error => {
        console.log(error)
        dispatch(authError(error.response.data.error))
      })
  }
}

export function signoutAction() {
  localStorage.removeItem('token')
  return { type: UNAUTHENTICATE }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  }
}
