import AuthFooter from './AuthFooter';
import UnAuthFooter from './UnAuthFooter';
import { useSelector } from 'react-redux';

function Footer() {
  const loggedIn = useSelector((state) => state.isLoggedIn.loggedIn);

  if (loggedIn) return <AuthFooter />;
  else return <UnAuthFooter />;
};

export default Footer;