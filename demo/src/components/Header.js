import React from 'react';
import MenuItem from './MenuItem';

import './Header.css';

const Header = function () {
  return (
    <header className="app-header">
      <nav className="nav-header">
        <img src="/bobscinema.png" alt="Bob's Cinema logo" />
        <ul className="menu-list">
          <MenuItem menuLabel="Home" color="red" />
          <MenuItem menuLabel="Movies" color="yellow" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// return React.createElement(
//   'header',
//   { className: 'app-header' },

//   React.createElement(
//     'nav',
//     { className: 'nav-header' },

//     React.createElement(
//       'img',
//       { src: '/bobscinema.png', alt: "Bob's Cinema logo" },
//       null
//     ),

//     React.createElement(
//       'ul',
//       { className: 'menu-list' },

//       [
//         React.createElement(MenuItem, { menuLabel: 'Home' }),
//         React.createElement(MenuItem, { menuLabel: 'Movies' }),
//       ]
//     )
//   )
// );
