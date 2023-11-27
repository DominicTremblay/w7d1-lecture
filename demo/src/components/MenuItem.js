import React from 'react';
import './MenuItem.css'

const MenuItem = function (props) {

  // props = { menuLabel: 'Home', color: 'red' }

  console.log(props)

  return (
    <li style={{color: props.color}} className='menu-item'>{ props.menuLabel }</li>
  )
};



export default MenuItem;


// React.createElement('li', { className: 'menu-item' }, props.menuLabel);