import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './components/Main/main.css'

import Header from './components/Header';

import Home from './components/Main';
import Profile from './components/Main/Profile';
import Goals from './components/Main/Goals';
import Activities from './components/Main/Activities';
import Performance from './components/Main/Performance';
import Support from './components/Main/Support';
import FAQs from './components/Main/FAQs';
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Error_404 from './components/Main/Error_404';

import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/index.html' component={ Home } />
          <Route exact path='/home' component={ Home } />
          <Route exact path='/profile' component={ Profile } />
          <Route exact path='/goals' component={ Goals } />
          <Route exact path='/activities' component={ Activities } />
          <Route exact path='/performance' component={ Performance } />
          <Route exact path='/support' component={ Support } />
          <Route exact path='/faqs' component={ FAQs } />
          {/* <Route exact path='/logout' component={ Logout } /> */}
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
