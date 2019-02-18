import React, { Component } from 'react';
import links from './links'
import { NavLink} from "react-router-dom";

class NavbarLinks extends React.Component {

  constructor() {
    super();
    this.state = {
      links: links
    }
  }

  render() {
    const { links } = this.state

    return <div className='nav-link'>
              <div className='navbar-link-wrapper'>
                {links.map(link => <NavLink exact to={link.href}>{link.name}</NavLink>)}                   
              </div>
    </div>
  }
}

export default NavbarLinks;
