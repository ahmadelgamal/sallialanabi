import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData =
  [
    {
      title: 'Profile',
      path: '/profile',
      icon: <FaIcons.FaUser />,
      className: 'nav-text'
    },
    {
      title: 'Set Goals',
      path: '/goals',
      icon: <FaIcons.FaBullseye />,
      className: 'nav-text'
    },
    {
      title: 'Record Activities',
      path: '/activities',
      icon: <FaIcons.FaPray />,
      className: 'nav-text'
    },
    {
      title: 'Track Performance',
      path: '/performance',
      icon: <FaIcons.FaChartLine />,
      className: 'nav-text'
    },
    {
      title: 'Support Group',
      path: '/support',
      icon: <FaIcons.FaUsers />,
      className: 'nav-text'
    },
    {
      title: 'FAQs',
      path: '/faqs',
      icon: <FaIcons.FaQuestion />,
      className: 'nav-text'
    },
    {
      title: 'Logout',
      path: '/logout',
      icon: <FaIcons.FaSignOutAlt />,
      className: 'nav-text'
    }
    // {
    //   title: 'Home',
    //   path: '/',
    //   icon: <FaIcons.FaMosque />,
    //   className: 'nav-text'
    // },
    // {
    //   title: 'About',
    //   path: '/about',
    //   icon: <FaIcons.FaInfo />,
    //   className: 'nav-text'
    // },
    // {
    //   title: 'Contact',
    //   path: '/contact',
    //   icon: <FaIcons.FaRegEdit />,
    //   className: 'nav-text'
    // }
  ];