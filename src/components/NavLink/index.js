import React, { Component } from 'react';


class NavLink extends React.Component {
    render() {
      return <div className='nav-link'>
        <a href={this.props.href}> {this.props.children} </a>
      </div>
    }
  }
 
export default NavLink;
