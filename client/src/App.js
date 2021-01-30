import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/';

import Home from './components/Main/';
import Events from './components/Main/Events';
import Resources from './components/Main/Resources';
import FAQs from './components/Main/FAQs';
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Account from './components/Main/Account';

import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/events' component={ Events } />
          <Route exact path='/resources' component={ Resources } />
          <Route exact path='/faqs' component={ FAQs } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/account' component={ Account } />
          <Route render={ () => <main><h1 className='error-404'>Error 404!<br />Page not found!</h1></main> } />
        </Switch>

        <Footer />
      </Router>
    </div>
  );

};

export default App;
