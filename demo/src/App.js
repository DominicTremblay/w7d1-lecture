import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(Header)
  );
}

export default App;

// React.createElement(
//   'h1',
//   { className: 'app-title' },
//   "Welcome to Bob's Cinema"
// )
// );
