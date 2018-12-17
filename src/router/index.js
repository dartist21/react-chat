import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayoutRoute from '../containers/layouts/Main';

import NotFound from '../containers/pages/NotFound';
import Root from '../containers/pages/Root';

export const Routes = () => {
  return (
    <Switch>
      <MainLayoutRoute exact path="/" component={Root} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
