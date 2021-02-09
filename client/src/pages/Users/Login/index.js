import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';

import Home from './Main';

import Footer from './Footer';

function Login() {
  return (
    <div className='Login'>
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/register' component={ Home } />
          <Route exact path='/login' component={ Home } />
          <Route exact path='/index.html' component={ Home } />
          <Route exact path='/home' component={ Home } />

          {/* <Route exact path='/logout' component={ Logout } /> */ }

        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default Login;
