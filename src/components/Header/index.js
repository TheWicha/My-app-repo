import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavItem from '../NavItem';
import NavLink from '../NavLink';
import InnerHeader from '../InnerHeader';
import img from '../../images/logo-mark.svg'
import img2 from '../../images/logo-text.svg'



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
                <InnerHeader src={img}
                             src2={img2}
                />

             </div>
    }
  }
 
export default Header;
