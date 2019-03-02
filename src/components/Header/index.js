import React from 'react';
import Navbar from '../Navbar';
import InnerHeader from '../InnerHeader';
import HeaderLogo from '../HeaderLogo';
import HeaderSearch from '../HeaderSearch';




class Header extends React.Component {
  render() {
    
    const headerClass = this.props.isUnderlined ? 'header header-underlined' : 'header'

    return (
      <div className={headerClass}>
        <Navbar />
        <InnerHeader>
          <HeaderLogo />
          <HeaderSearch />
        </InnerHeader>
      </div>
    )
  }
}

export default Header;
