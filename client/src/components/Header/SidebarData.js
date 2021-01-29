import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaMosque />,
    className: 'nav-text'
  },
  {
    title: 'Ramadan',
    path: '/ramadan',
    icon: <FaIcons.FaMoon />,
    className: 'nav-text'
  },
  {
    title: 'FAQs',
    path: '/faqs',
    icon: <FaIcons.FaQuestion />,
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaInfo />,
    className: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaRegEdit />,
    className: 'nav-text'
  },
  {
    title: 'Account',
    path: '/account',
    icon: <FaIcons.FaUser />,
    className: 'nav-text'
  }
]