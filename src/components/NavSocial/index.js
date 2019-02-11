import React, { Component } from 'react';
import socialLinks from './socialLinks'


class NavSocial extends React.Component {

    constructor() {
        super();
        this.state = { socialLinks }
    }

  render() {
    const { socialLinks } = this.state;

    return ( 
      <ul className='navbar-socials-wrapper'>
        {socialLinks.map(social => 
          <li  className={`nav-social-${social.className}`}> 
            <a href={social.link} /> 
          </li>)}
      </ul>
    )
  }
}

export default NavSocial
