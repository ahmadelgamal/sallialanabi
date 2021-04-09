import AuthHeader from './AuthHeader';
import UnAuthHeader from './UnAuthHeader';
import { useSelector } from 'react-redux';

function Header() {
  const loggedIn = useSelector((state) => state.isLoggedIn.loggedIn);

  if (loggedIn) return <AuthHeader />;
  else return <UnAuthHeader />;
};

export default Header;