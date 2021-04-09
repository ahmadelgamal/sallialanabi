import { useState } from "react";

import './App.css';
import './header.css';
import './main.css';
import './footer.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Admin from './pages/Admin';

import Header from './Users/components/Header';
import Footer from './Users/components/Footer';

// import Landing from './Users/components/Landing';
import Login from './Users/components/Login';
import Register from './Users/components/Register';
import Error404 from './Users/components/Error404';

import About from './Users/components/About';
import Contact from './Users/components/Contact';
import FAQs from './Users/components/FAQs';

import ProtectedRoute from './Users/components/ProtectedRoute';
import Dashboard from './Users/components/Dashboard';
import Activities from './Users/components/Activities';
import Goals from './Users/components/Goals';
import Performance from './Users/components/Performance';
import Profile from './Users/components/Profile';
// import Support from './Users/components/Support';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // e.preventDefault();
    setLoggedIn(true);
  };

  const handleLogout = e => {
    e.preventDefault();
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">

        <Header loggedIn={ loggedIn } handleLogout={ handleLogout } />

        <Switch>

          <Route
            exact path='/'
            component={ () =>
              <Login loggedIn={ loggedIn } handleLogin={ handleLogin } />
            } />

          <Route
            exact path='/login'
            component={ () =>
              <Login loggedIn={ loggedIn } handleLogin={ handleLogin } />
            } />

          <Route exact path='/register'>
            <Register />
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
            loggedIn={ loggedIn }
            handleLogout={ handleLogout }
            component={ Dashboard }
          />
          <ProtectedRoute
            exact path='/profile'
            loggedIn={ loggedIn }
            component={ Profile }
          />
          <ProtectedRoute
            exact path='/goals'
            loggedIn={ loggedIn }
            component={ Goals }
          />
          <ProtectedRoute
            exact path='/activities'
            loggedIn={ loggedIn }
            component={ Activities }
          />
          <ProtectedRoute
            exact path='/performance'
            loggedIn={ loggedIn }
            component={ Performance }
          />
          {/* <ProtectedRoute
            exact path='/support'
            loggedIn={ loggedIn }
            component={ Support }
          /> */}

          <Route path='/*'>
            <Error404 />
          </Route>

        </Switch>

        <Footer loggedIn={ loggedIn } />

      </div >
    </Router >
  );
};

export default App;
