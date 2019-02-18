import React, { Component } from 'react';
import SliderBox from '../SliderBox'
import '../../images/food1.jpg'


class Slider extends React.Component {
    render() {
      return <div className='slider' style={{backgroundImage: 'url("/images/food1.jpg")'}} > <SliderBox /> </div>
    }
  }
 
export default Slider;