import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Posts from '../posts/posts.js'
import HomePage from '../homePage/home_page.js'

export  default class extends Component {

  render(){
    return(
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/posts" component={Posts} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
