import { Link } from 'react-router-dom';

import Login from './Login';

function Landing(props) {

  return (
    <main className='landing'>
      <Login />

      <div className="container">
        <p><Link to='/dashboard'>View Dashboard</Link></p>
        <p>Logged in status: { props.user }</p>
        <button onClick={ props.handleLogin }>Log In</button>

      </div>
    </main>
  );
};

export default Landing;
