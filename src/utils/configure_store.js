import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers.js';

const middlewares = [thunk];
const enhancer = composeWithDevTools((applyMiddleware(...middlewares)));

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept('./reducers.js', () => {
      store.replaceReducer(require('./reducers.js').default)
    });
  }
  return store;
}
