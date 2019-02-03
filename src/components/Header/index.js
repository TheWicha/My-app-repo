import React, { Component } from 'react';
import Navbar from '../Navbar';
import NavLink from '../NavLink';
import InnerHeader from '../InnerHeader';
import HeaderLogo from '../HeaderLogo';
import HeaderSearch from '../HeaderSearch';
import Slider from '../Slider'
import logoImg from '../../images/logo-mark.svg'
import logoText from '../../images/logo-text.svg'
import sliderImg from '../../images/food1.jpg'



class Header extends React.Component {
    render() {
      return <div className='header'>
                <Navbar>
                  <NavLink href="#">Home</NavLink>
                  <NavLink href="#">About</NavLink>
                  <NavLink href="#">recipe index</NavLink>
                  <NavLink href="#">recipe search</NavLink>
                </Navbar>
                <InnerHeader>
                  <HeaderLogo src={logoImg} src2={logoText} />
                  <HeaderSearch />
                </InnerHeader>
                <Slider sliderImg={sliderImg}/>
             </div>
    }
  }
 
export default Header;
