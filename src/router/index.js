import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayoutRoute from '../containers/layouts/Main';

import NotFound from '../containers/pages/NotFound';
import Root from '../containers/pages/Root';
import Chats from '../containers/pages/Chats';
import Chat from '../containers/pages/Chat';

export const Routes = () => {
  return (
    <Switch>
      <MainLayoutRoute exact path="/" component={Root} />
      <MainLayoutRoute exact path="/chat" component={Chats} />
      <MainLayoutRoute exact path="/chat/:id" component={Chat} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
