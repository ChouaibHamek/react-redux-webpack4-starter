/* eslint-disable import/no-extraneous-dependencies */

import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import thunk from 'redux-thunk'
import reducer from './reducers'

const reducers = require('./reducers.js').default

const middlewares = [thunk]
const enhancer = composeWithDevTools(applyMiddleware(...middlewares))

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('./reducers.js', () => {
      store.replaceReducer(reducers)
    })
  }
  return store
}
