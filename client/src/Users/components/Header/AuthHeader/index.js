import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import Logo from '../../../../assets/images/logo192.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../redux/ducks/isLoggedIn';
import UnAuthHeader from '../UnAuthHeader';

function AuthHeader() {

  const loggedIn = useSelector((state) => state.isLoggedIn.loggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);
  
  function navLogout(e) {
    e.preventDefault();
    fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => {
        if (response.status === 204) {
          handleLogout();
          console.log('Logged out successfully!');
        }
        else console.log('Error logging out. You are probably not logged in to begin with!');
      })
      .catch(err => console.error(err));
  }

  if(!loggedIn) {
    return <UnAuthHeader />;
  }
  
  return (
    <header>
      <div className="navbar">
        <Link
          to="#"
          className={ sidebar ? "menu-bars hidden" : "menu-bars" }
          onClick={ showSideBar }>
          <FaIcons.FaBars />
        </Link>

        <Link
          to="#"
          className={ sidebar ? "menu-times" : "menu-times hidden" }
          onClick={ hideSidebar }>
          <FaIcons.FaTimes />
        </Link>

        <NavLink to='/activities' id='logo' onClick={ hideSidebar }>
          <img alt='logo' width='45' height='45' src={ Logo }></img>
        </NavLink>

        <Link
          to="#"
          className="menu-plus">
          <FaIcons.FaPlus />
        </Link>
      </div>

      <div className="push-content-under-navbar"></div>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className='nav-menu-items'>

          { SidebarData.map((item, index) => {
            return (
              <li
                key={ index }
                className={ item.className }>
                <NavLink
                  exact to={ item.path }
                  onClick={ hideSidebar }>
                  { item.icon }
                  <span>{ item.title }</span>
                </NavLink>
              </li>
            );
          }) }

          <li className='nav-text'><Link to='#' onClick={ navLogout }><FaIcons.FaSignOutAlt /><span>Logout</span></Link></li>
        </ul>
      </nav>

      {/* this layer is used to hideSidebar when clicking outside of it */ }
      <div
        className={ sidebar ? 'right-side-layer active' : 'right-side-layer hidden' }
        onClick={ hideSidebar }>
      </div>
    </header >
  );
};

export default AuthHeader;