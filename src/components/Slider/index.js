import React, { Component } from 'react';


class Slider extends React.Component {
    render() {
      return <div className='slider' style={{backgroundImage: `url("${this.props.sliderImg}")`}} > {this.props.children} </div>
    }
  }
 
export default Slider;