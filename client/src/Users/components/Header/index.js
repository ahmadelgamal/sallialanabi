import AuthHeader from './AuthHeader';
import UnAuthHeader from './UnAuthHeader';

function Header(props) {
  const isLoggedIn = props.user;

  if (isLoggedIn) {
    return <AuthHeader />;
  }
  return <UnAuthHeader />;
};

export default Header;