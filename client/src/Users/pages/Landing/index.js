import { Link } from 'react-router-dom';

import Login from '../../components/Login';

function Landing(props) {

  return (
    <main className='landing'>
      <div className="container">
        <p><Link to='/dashboard'>View Dashboard</Link></p>
        <p>Logged in status: { props.user.toString() }</p>
        <button onClick={ props.handleLogin }>Log In</button>

        <Login />
      </div>
    </main>
  );
};

export default Landing;
