import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './header.css';

function Header() {

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <header>
      <div className="navbar">
        <Link
          to="#"
          className={ sidebar ? 'menu-bars blend-in' : 'menu-bars' }
          onClick={ showSideBar }>
          <FaIcons.FaBars />
        </Link>

        <NavLink
          to="/"
          id="logo"
          onClick={ hideSidebar }
        >
          &#xFDFA;
            </NavLink>
      </div>

      <nav className={ sidebar ? 'nav-menu active' : 'nav-menu' }>
        <ul className='nav-menu-items'>
          <li className='navbar-toggle'>
            <Link
              to="#"
              className="menu-times"
              onClick={ hideSidebar }>
              <FaIcons.FaTimes />
            </Link>
          </li>

          { SidebarData.map((item, index) => {
            return (
              <li
                key={ index }
                className={ item.className }>
                <NavLink
                  exact to={ item.path }
                  onClick={ hideSidebar }
                  activeStyle={ { backgroundColor: '#33691e' } }>
                  { item.icon }
                  <span>{ item.title }</span>
                </NavLink>
              </li>
            );
          }) }
        </ul>
      </nav>
    </header >
  );
};

export default Header;