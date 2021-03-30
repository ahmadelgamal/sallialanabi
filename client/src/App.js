import { useState } from "react";

import './App.css';
import './header.css';
import './main.css';
import './footer.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Admin from './pages/Admin';

import Header from './Users/components/Header';
import Footer from './Users/components/Footer';

import About from './Users/components/About';
import Contact from './Users/components/Contact';
import FAQs from './Users/components/FAQs';

import Landing from './Users/pages/Landing';
import Error404 from './Users/components/Error404/Error404';

import ProtectedRoute from './Users/ProtectedRoute';
import Dashboard from './Users/pages/Dashboard';
import Activities from './Users/pages/Dashboard/Activities';
import Goals from './Users/pages/Dashboard/Goals';
import Performance from './Users/pages/Dashboard/Performance';
import Profile from './Users/pages/Dashboard/Profile';
import Support from './Users/pages/Dashboard/Support';

function App() {

  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  };

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  };

  return (
    <Router>
      <div className="App">

        <Header user={ user } />

        <Switch>

          <Route exact path='/' handleLogin={ handleLogin }>
            <Landing user={ user.toString() } handleLogin={ handleLogin } />
          </Route>

          <Route exact path='/login' handleLogin={ handleLogin }>
            <Landing user={ user.toString() } handleLogin={ handleLogin } />
          </Route>

          <Route exact path='/register' handleLogin={ handleLogin }>
            <Landing user={ user.toString() } handleLogin={ handleLogin } />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route exact path='/faqs'>
            <FAQs />
          </Route>

          <ProtectedRoute
            exact path='/dashboard'
            user={ user }
            handleLogout={ handleLogout }
            component={ Dashboard }
          />
          <ProtectedRoute
            exact path='/profile'
            user={ user }
            handleLogout={ handleLogout }
            component={ Profile }
          />
          <ProtectedRoute
            exact path='/goals'
            user={ user }
            handleLogout={ handleLogout }
            component={ Goals }
          />
          <ProtectedRoute
            exact path='/activities'
            user={ user }
            handleLogout={ handleLogout }
            component={ Activities }
          />
          <ProtectedRoute
            exact path='/performance'
            user={ user }
            handleLogout={ handleLogout }
            component={ Performance }
          />
          <ProtectedRoute
            exact path='/support'
            user={ user }
            handleLogout={ handleLogout }
            component={ Support }
          />

          <Route path='/*'>
            <Error404 />
          </Route>

        </Switch>

        <Footer user={ user } />

      </div >
    </Router >
  );
};

export default App;
