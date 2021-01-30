import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/';

import Home from './components/Main/';
import Rituals from './components/Main/Rituals';
import Resources from './components/Main/Resources';
import Calendar from './components/Main/Calendar/';
import FAQs from './components/Main/FAQs';
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Account from './components/Main/Account';
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
          <Route exact path='/rituals' component={ Rituals } />
          <Route exact path='/resources' component={ Resources } />
          <Route exact path='/calendar' component={ Calendar } />
          <Route exact path='/faqs' component={ FAQs } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/account' component={ Account } />
          <Route path='/*' component={ Error_404 } />
        </Switch>

        <Footer />
      </Router>
    </div>
  );

};

export default App;
