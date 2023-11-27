import React from 'react';
import MenuItem from './MenuItem';

const Header = function () {
  return React.createElement(
    'header',
    { className: 'app-header' },

    React.createElement(
      'nav',
      { className: 'nav-header' },

      React.createElement(
        'img',
        { src: '/bobscinema.png', alt: "Bob's Cinema logo" },
        null
      ),

      React.createElement(
        'ul',
        { className: 'menu-list' },

        [
          React.createElement(MenuItem, { menuLabel: 'Home' }),
          React.createElement(MenuItem, { menuLabel: 'Movies' }),
        ]
      )
    )
  );
};

export default Header;
