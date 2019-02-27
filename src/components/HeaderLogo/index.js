import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import '../../images/logo-mark.svg'
import '../../images/logo-text.svg'

class HeaderLogo extends React.Component {
    render() {
        return (
            <NavLink exact to="/">
                <div className='inner-header-logo'>        
                    <div className='logo-img'>
                        <img src="/images/logo-mark.svg"></img>
                    </div>
                    <div className='logo-text-img'>
                        <img src="/images/logo-text.svg"></img>
                    </div>
                </div>
            </NavLink>
        )
    }
  }
 
export default HeaderLogo;
