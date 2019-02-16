import React, { Component } from 'react';

class ErrorBox extends React.Component {
    render() {
      return (
        <div className="error"> 
            <p className='error-msg'>{this.props.error.message}</p>
            <p className='error-click' onClick={this.props.getPosts}>Please try again</p>
        </div>
        )
    }
  }
  
  export default ErrorBox;