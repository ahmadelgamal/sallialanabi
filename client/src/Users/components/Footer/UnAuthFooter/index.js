import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='footer-nav flex'>
        <NavLink exact to='/'>
          Home
        </NavLink>
        <NavLink exact to='/about'>
          About
        </NavLink>
        <NavLink exact to='/contact'>
          Contact
        </NavLink>
        <NavLink exact to='/faqs'>
          FAQs
        </NavLink>
      </div>
      <div className='copyright'>
        <p>Copyright &copy; 2021 Salli Ala Nabi.</p>
      </div>
    </footer>
  )
};

export default Footer;