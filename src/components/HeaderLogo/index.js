import React, { Component } from 'react';
import '../../images/logo-mark.svg'
import '../../images/logo-text.svg'

class HeaderLogo extends React.Component {
    render() {
               return <div className='inner-header-logo'>        
                        <div className='logo-img'>
                            <img src="/images/logo-mark.svg"></img>
                        </div>
                        <div className='logo-text-img'>
                            <img src="/images/logo-text.svg"></img>
                        </div>
                    </div>
    }
  }
 
export default HeaderLogo;
