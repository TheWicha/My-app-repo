import React, { Component } from 'react';


class HeaderLogo extends React.Component {
    render() {
               return <div className='inner-header-logo'>        
                        <div className='logo-img'>
                            <img src={this.props.src}></img>
                        </div>
                        <div className='logo-text-img'>
                            <img src={this.props.src2}></img>
                        </div>
                    </div>
    }
  }
 
export default HeaderLogo;
