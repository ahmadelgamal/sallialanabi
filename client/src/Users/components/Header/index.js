import AuthHeader from './AuthHeader';
import UnAuthHeader from './UnAuthHeader';

function Header(props) {
  const { loggedIn, setLoggedIn } = props;

  if (loggedIn) {
    return <AuthHeader
      logged={ loggedIn }
      setLoggedIn={ setLoggedIn }
    />;
  }
  return <UnAuthHeader
    logged={ loggedIn }
    setLoggedIn={ setLoggedIn }
  />;
};

export default Header;