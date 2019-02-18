import React, { Component } from 'react';
import NavbarLinks from '../NavbarLinks';
import NavSocial from '../NavSocial';

class Navbar extends React.Component {
  render() {
    return <div className='navbar'>
      <div className='nav-container'>
        <NavbarLinks />
        <NavSocial />
      </div>
    </div>
  }
}

export default Navbar;
