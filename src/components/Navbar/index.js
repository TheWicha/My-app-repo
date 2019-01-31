import React, { Component } from 'react';


class Navbar extends React.Component {
    render() {
      return <div className='navbar'>
                <div className='navbar-link-wrapper'>{this.props.children}</div>
            </div>
    }
  }
 
export default Navbar;
