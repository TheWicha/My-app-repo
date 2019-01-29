import React, { Component } from 'react';


class NavLink extends React.Component {
    render() {
      return <div className='nav-link'>{this.props.children}</div>
    }
  }
 
export default NavLink;