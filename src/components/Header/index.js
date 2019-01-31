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
                        <NavLink href="#">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">recipe index</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">recipe search</NavLink>
                    </NavItem>
                </Navbar>
             </div>
    }
  }
 
export default Header;
