import React, { Component } from 'react';


class InnerHeader extends React.Component {
    render() {
      return <div className='inner-header'> {this.props.children} </div>
    }
  }
 
export default InnerHeader;
