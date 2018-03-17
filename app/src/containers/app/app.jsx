import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Posts from '../posts/posts'
import HomePage from '../homePage/home_page'

export default () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </div>
)
