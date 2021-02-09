import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './header.css';
import './main.css';
import './footer.css';


import Admin from './pages/Admin';
import Login from './pages/Users/Login';
import Dashboard from './pages/Users/Dashboard';

import About from './pages/Users/About';
import Contact from './pages/Users/Contact';
import FAQs from './pages/Users/FAQs';

import Error_404 from './Error_404';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={ Login } />

          <Route exact path='/admin' component={ Admin } />
          <Route exact path='/login' component={ Dashboard } />
          <Route exact path='/logout' component={ Login } />

          <Route exact path='/about' component={ About } />
          <Route exact path='/contact' component={ Contact } />
          <Route exact path='/faqs' component={ FAQs } />

          <Route path='/*' component={ Error_404 } />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
