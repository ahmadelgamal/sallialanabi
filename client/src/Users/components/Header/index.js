import AuthHeader from './AuthHeader';
import UnAuthHeader from './UnAuthHeader';

function Header({ loggedIn }) {

  if (loggedIn) {
    return <AuthHeader />;
  }
  return <UnAuthHeader />;
};

export default Header;