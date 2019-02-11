import React, { Component } from 'react';
import '../../images/food1.jpg'


class Slider extends React.Component {
    render() {
      return <div className='slider' style={{backgroundImage: 'url("/images/food1.jpg")'}} > {this.props.children} </div>
    }
  }
 
export default Slider;