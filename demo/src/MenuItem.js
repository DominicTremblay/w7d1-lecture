import React from 'react';
import './MenuItem.css'

const MovieItem = (props) => {
  return React.createElement('li', { className: 'movie-item' }, props.title);
};

export default MovieItem;
