import React, { Component } from 'react';


class Slider extends React.Component {
    render() {
      return <div className='slider' style={{backgroundImage: `url("${this.props.sliderImg}")`}}>
            </div>
    }
  }
 
export default Slider;