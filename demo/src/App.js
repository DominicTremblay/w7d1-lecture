import React from 'react';
import './App.css';
import MovieItem from './MovieItem';

function App(props) {
  console.log(props);

  return React.createElement(
    'div',
    { className: 'App' },

    React.createElement(
      'header',
      { className: 'app-header' },

      React.createElement(
        'nav',
        { className: 'nav-header' },
        React.createElement('h1', { className: 'logo' }, `Bob's Cinema`),

        React.createElement(
          'ul',
          { className: 'menu-list' },

          [
            React.createElement(MovieItem, { title: 'Home' }, null),
            React.createElement(MovieItem, { title: 'Movies' }, null),
          ]
        )
      )
    )
  );
}

export default App;
