import React, { Component } from 'react';


class NavLink extends React.Component {

  constructor() {
    super();
    this.state = {
      links: ['home', 'about', 'recipe index', 'recipe search'],
    }

  }

  render() {
    const { links } = this.state

    return <div className='nav-link'>
              <div className='navbar-link-wrapper'>
                {links.map(link => <a href={this.props.href}>{link}</a>)}
              </div>
    </div>
  }
}

export default NavLink;
