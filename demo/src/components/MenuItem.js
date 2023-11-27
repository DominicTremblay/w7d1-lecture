import React from 'react';
import './MenuItem.css';

const MovieItem = (props) => {
  return <li className="movie-item">{props.title}</li>;

};

export default MovieItem;
