import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';

import Profile from './Main/Profile';
import Goals from './Main/Goals';
import Activities from './Main/Activities';
import Performance from './Main/Performance';
import Support from './Main/Support';

import About from '../About';
import Contact from '../Contact';
import FAQs from '../FAQs';

import Footer from './Footer';

function Dashboard() {
  return (
    <div className='Dashboard'>
      <Router>
        <Header />

        <Switch>
          {/* <Route exact path='/' component={ Home } /> */}
          {/* <Route exact path='/register' component={ Home } /> */}
          {/* <Route exact path='/login' component={ Home } /> */ }
          {/* <Route exact path='/index.html' component={ Home } /> */}
          {/* <Route exact path='/home' component={ Home } /> */}

          <Route exact path='/profile' component={ Profile } />
          <Route exact path='/goals' component={ Goals } />
          <Route exact path='/activities' component={ Activities } />
          <Route exact path='/performance' component={ Performance } />
          <Route exact path='/support' component={ Support } />
          <Route exact path='/faqs' component={ FAQs } />
          {/* <Route exact path='/logout' component={ Logout } /> */ }
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default Dashboard;
