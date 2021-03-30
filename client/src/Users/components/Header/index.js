import AuthHeader from './P_Header';
import UnauthHeader from './U_Header';

function Header(props) {
  const isLoggedIn = props.user;

  if (isLoggedIn) {
    return <AuthHeader />;
  }
  return <UnauthHeader />;
};

export default Header;