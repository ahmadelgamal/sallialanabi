import AuthFooter from './AuthFooter';
import UnAuthFooter from './UnAuthFooter';

function Footer(props) {
  const isLoggedIn = props.user;

  if (isLoggedIn) {
    return <AuthFooter />;
  }
  return <UnAuthFooter />;
};

export default Footer;