import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import webChat from '../pages/webchat';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={ webChat } />
    </Switch>
  </HashRouter>
);

export default Routes;
