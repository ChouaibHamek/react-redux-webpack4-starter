import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from '../homePage/home_page'
import Signin from '../auth/signin'
import Signout from '../auth/signout'
import Signup from '../auth/signup'

export default class extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signout" component={Signout} />
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}
