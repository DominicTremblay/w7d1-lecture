import React from 'react';

const MenuItem = function (props) {

  // props = { menuLabel: 'Home' }

  console.log(props);

  return React.createElement('li', { className: 'menu-item' }, props.menuLabel);
};

export default MenuItem;
