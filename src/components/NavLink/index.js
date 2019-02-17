import React, { Component } from 'react';
import links from './links'


class NavLink extends React.Component {

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
                {links.map(link => <a href={link.href}>{link.name}</a>)}
              </div>
    </div>
  }
}

export default NavLink;
