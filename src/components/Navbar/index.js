import React, { Component } from 'react';
import NavLink from '../NavLink';
import NavSocial from '../NavSocial';

class Navbar extends React.Component {
  render() {
    return <div className='navbar'>
      <div className='nav-container'>
        <NavLink />
        <NavSocial />
      </div>
    </div>
  }
}

export default Navbar;
