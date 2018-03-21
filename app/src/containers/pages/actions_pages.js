import { ROOT_URL } from '../auth/actions_auth.js'
import axios from 'axios'

export const FETCH_MESSAGE = 'FETCH_MESSAGE'

export function fetchSecretMessage () {
  return function (dispatch) {
    return axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({ type: FETCH_MESSAGE, payload: response.data })
      })
  }
}
