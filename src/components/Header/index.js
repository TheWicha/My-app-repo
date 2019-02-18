import React, { Component } from 'react';
import Navbar from '../Navbar';
import InnerHeader from '../InnerHeader';
import HeaderLogo from '../HeaderLogo';
import HeaderSearch from '../HeaderSearch';




class Header extends React.Component {
  render() {
    return <div className='header'>
              <Navbar />
              <InnerHeader>
                <HeaderLogo />
                <HeaderSearch />
              </InnerHeader>

    </div>
  }
}

export default Header;
