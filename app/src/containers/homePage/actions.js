import axios from 'axios'

export const GET_EXPRESS_DATA = 'GET_EXPRESS_DATA'

const URL = 'http://localhost:3090/api/hello'

export function fetchExpressData() {
  const request = axios.get(URL)

  return (dispatch) => {
    request.then(response => dispatch({
      type: GET_EXPRESS_DATA,
      payload: response,
    }))
  }
}
