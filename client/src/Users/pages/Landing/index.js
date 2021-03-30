import { Link } from 'react-router-dom';

import Login from '../../components/Login';

function Landing(props) {
  return (
    <div className='Landing'>

      <p><Link to='/dashboard'>View Dashboard</Link></p>
      <p>Logged in status: { props.user }</p>
      <button onClick={ props.handleLogin }>Log In</button>

      <Login />

    </div>
  );
};

export default Landing;
