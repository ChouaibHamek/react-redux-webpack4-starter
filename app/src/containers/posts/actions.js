import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=0'

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return (dispatch) => {
    request.then(response => dispatch({
      type: FETCH_POSTS,
      payload: response,
    }))
  }
}
