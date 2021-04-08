import AuthFooter from './AuthFooter';
import UnAuthFooter from './UnAuthFooter';

function Footer({loggedIn}) {
  if (loggedIn) {
    return <AuthFooter />;
  }
  return <UnAuthFooter />;
};

export default Footer;