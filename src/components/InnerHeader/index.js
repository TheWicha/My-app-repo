import React, { Component } from 'react';


class InnerHeader extends React.Component {
    render() {
      return <div className='inner-header'>
                <div className='inner-header-logo'>        
                    <div className='logo-img'>
                        <img src={this.props.src}></img>
                    </div>
                    <div className='logo-text-img'>
                        <img src={this.props.src2}></img>
                    </div>
                </div>
                <div className='inner-header-search'>
                    <form role='search' method='get' className='search-form'>
                        <label className='search-label'>Find a recipe:</label>
                        <input type='search'></input>
                    </form>
                </div>
            </div>
    }
  }
 
export default InnerHeader;
