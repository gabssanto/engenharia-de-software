import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Register from './pages/Register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/signUp' exact component={SignUp} />
        <Route path='/home' exact component={Home} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </BrowserRouter>
  );
}