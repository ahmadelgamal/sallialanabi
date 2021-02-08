import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './pages/LoggedOut/Header';

import Admin from './pages/Admin/Main';

import Home from './pages/LoggedOut/Main';

import Profile from './pages/LoggedIn/Main/Profile';
import Goals from './pages/LoggedIn/Main/Goals';
import Activities from './pages/LoggedIn/Main/Activities';
import Performance from './pages/LoggedIn/Main/Performance';
import Support from './pages/LoggedIn/Main/Support';

import About from './pages/LoggedOut/Main/About';
import Contact from './pages/LoggedOut/Main/Contact';
import FAQs from './pages/LoggedOut/Main/FAQs';

import Error_404 from './pages/LoggedOut/Main/Error_404';

import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path='/admin' component={ Admin } />
          <Route exact path='/' component={ Home } />
          <Route exact path='/register' component={ Home } />
          <Route exact path='/login' component={ Home } />
          <Route exact path='/index.html' component={ Home } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/profile' component={ Profile } />
          <Route exact path='/goals' component={ Goals } />
          <Route exact path='/activities' component={ Activities } />
          <Route exact path='/performance' component={ Performance } />
          <Route exact path='/support' component={ Support } />
          <Route exact path='/faqs' component={ FAQs } />
          {/* <Route exact path='/logout' component={ Logout } /> */ }
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
          <Route path='/*' component={ Error_404 } />
        </Switch>

        <Footer />
      </Router>
    </div>
  );

};

export default App;
