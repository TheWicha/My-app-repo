import React, { Component } from 'react';

class LoadBox extends React.Component {
    render() {
      return  <div className="load-wrapp">
      <div className="load-1">
        <p>Loading...</p>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
    }
  }
  
  export default LoadBox;