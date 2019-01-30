import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavItem from '../NavItem';
import NavLink from '../NavLink';
import NavLogo from '../NavLogo';



class Header extends React.Component {
    render() {
      return <div className='header'>
                <Navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">New Post</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLogo />
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">About Us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Shop</NavLink>
                    </NavItem>
                </Navbar>
             </div>
    }
  }
 
export default Header;