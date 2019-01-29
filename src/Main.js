import React, { Component } from 'react';
import Header from './components/Header' 


class Main  extends React.Component {
    render() {
      return <div className="main-page-layout">
                <Header />
                <div className='main-content'>
                  <div className='categories'></div>
                  <div className='latest'></div>
                </div>
                <div className='footer'></div>
             </div>
    }
  }
 
export default Main;