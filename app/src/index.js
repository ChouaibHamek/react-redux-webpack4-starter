/* eslint-disable react/jsx-filename-extension, no-console */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './semantic/dist/semantic.min.css'
import './global-style.css'
import configureStore from './utils/configure_store'

const RedBox = require('redbox-react').default
const App = require('./containers/app/app.jsx').default

const store = configureStore()
const rootEl = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootEl,
  )
}

if (module.hot) {
  const renderApp = render
  const renderError = (error) => {
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl,
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      console.error(error)
      renderError(error)
    }
  }
  module.hot.accept('./containers/app/app.jsx', () => {
    setTimeout(render)
  })
}

render()
