import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../homePage/home_page'

export default class extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
