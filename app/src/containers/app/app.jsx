import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../home/home';

export default () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);
