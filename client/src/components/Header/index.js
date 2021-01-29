import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './header.css';

function Header() {

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <header>
      <div onBlur={ hideSidebar }>
        <IconContext.Provider value={ { color: 'var(--color-blue-grey-l5)' } }>
          <div className="navbar">
            <Link
              to="#"
              className='menu-bars'
              onClick={ showSideBar }>
              <FaIcons.FaBars />
            </Link>

            <Link
              to="/"
              id="logo"
              onClick={ hideSidebar }
            >
              &#xFDFA;
            </Link>
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
                  <li key={ index } className={ item.className }>
                    <NavLink exact to={ item.path } activeStyle={ { backgroundColor: '#33691e' } }>
                      { item.icon }
                      <span>{ item.title }</span>
                    </NavLink>
                  </li>
                );
              }) }
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </header >
  );
};

export default Header;