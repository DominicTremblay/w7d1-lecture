import MenuItem from './MenuItem';

import './Header.css';

const Header = (props) => {
  return (
    <header className="app-header">
      <nav className="nav-header">
        <img src="/bobscinema.png" alt="Bob's Cinema" />
        <ul className="menu-list">
          <MenuItem title="Home" />
          <MenuItem title="Movies" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
