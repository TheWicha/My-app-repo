import React, { Component } from 'react';
import '../../images/logo-mark.svg'
import links from './links'


class Footer extends React.Component {

    constructor() {
        super();
        this.state = {
            links: links
        }
    }

  render() {
    const { links } = this.state

    return (
        <div  className="footer-container">
            <div className='footer'>
                <div className='footer-logo'>        
                    <div className='footer-logo-img'>
                        <img src="/images/logo-mark.svg"></img>
                    </div>
                </div>
                <div className="footer-info">
                    <div className="footer-site-name">
                        <span className="footer-company">©2003-2019 My-app Recipes</span>
                        <span>, by </span>
                        <a href="#">Daniel Wisniewski Media</a>
                    </div>
                </div>
                <div className="footer-links">
                    {links.map(link => <a href={link.href}>{link.name}</a>)}
                </div>    
            </div>
        </div>
    )
  }
}

export default Footer;
