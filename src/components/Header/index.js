import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavItem from '../NavItem';
import NavLink from '../NavLink';


class Header extends React.Component {
    render() {
      return <div className='header'>
                <Navbar>
                    <NavItem>
                        <NavLink href="#">Home</NavLink>
                    </NavItem>
                </Navbar>
             </div>
    }
  }
 
export default Header;