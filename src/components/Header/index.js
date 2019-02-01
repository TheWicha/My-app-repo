import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavLink from '../NavLink';
import InnerHeader from '../InnerHeader';
import img from '../../images/logo-mark.svg'
import img2 from '../../images/logo-text.svg'



class Header extends React.Component {
    render() {
      return <div className='header'>
                <Navbar>
                        <NavLink href="#">Home</NavLink>
                        <NavLink href="#">About</NavLink>
                        <NavLink href="#">recipe index</NavLink>
                        <NavLink href="#">recipe search</NavLink>
                </Navbar>
                <InnerHeader src={img}
                             src2={img2}
                />

             </div>
    }
  }
 
export default Header;

