import React from 'react';
import './App.css';
import MenuItem from './MenuItem';

function App(props) {
  return (
    <div className="App">
      <header className="app-header">
        <nav className="nav-header">
          <h1 className="logo">Bob's Cinema</h1>
          <ul className="menu-list">
            <MenuItem title="Home" />
            <MenuItem title="Movies" />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
