import React from 'react';
import './MovieItem.css'

const MovieItem = (props) => {
  return React.createElement('li', { className: 'movie-item' }, props.title);
};

export default MovieItem;
