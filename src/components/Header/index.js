import React, { Component } from 'react';
import Navbar from '../Navbar';
import InnerHeader from '../InnerHeader';
import HeaderLogo from '../HeaderLogo';
import HeaderSearch from '../HeaderSearch';
import Slider from '../Slider'
import SliderBox from '../SliderBox'
import logoImg from '../../images/logo-mark.svg'
import logoText from '../../images/logo-text.svg'
import sliderImg from '../../images/food1.jpg'


class Header extends React.Component {
  render() {
    return <div className='header'>
      <Navbar />
      <InnerHeader>
        <HeaderLogo src={logoImg} src2={logoText} />
        <HeaderSearch />
      </InnerHeader>
      <Slider sliderImg={sliderImg}>
        <SliderBox />
      </Slider>
    </div>
  }
}

export default Header;
