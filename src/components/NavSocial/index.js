import React, { Component } from 'react';
import fbIcon from '../../images/icon-facebook-gray.svg';
import pinIcon from '../../images/icon-pinterest-gray.svg';
import igIcon from '../../images/icon-ig-gray.svg';
import snapIcon from '../../images/icon-snapchat-gray.svg';
import twitterIcon from '../../images/icon-twitter-gray.svg';


class NavSocial extends React.Component {

    constructor() {
        super();
        this.state = { socialLinks: [
                {
                    img: fbIcon, className: 'nav-social-facebook'
                }, 
                {
                    img: pinIcon, className: 'nav-social-pinintrest'
                },
                {
                    img: igIcon, className: 'nav-social-instagram'
                },
                {
                    img: snapIcon, className: 'nav-social-spanchat'
                },
                {
                    img: twitterIcon, className: 'nav-social-twitter'
                }
            ]
        }
    }

  render() {
    let socials = this.state.socialLinks

    return  <ul className='navbar-socials-wrapper'>
                {socials.map(social => <li  className={social.className} style={{backgroundImage: `url("${social.img}")`}}> 
                                            <a href="#"> </a>
                                        </li>
                )}
    </ul>
  }
}

export default NavSocial