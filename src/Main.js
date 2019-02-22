import React, { Component } from 'react';
import Header from './components/Header' 
import Footer from './components/Footer';
import { Route, BrowserRouter } from "react-router-dom";
import Content from './components/Content';


class Main  extends React.Component {

  render() {
      return (
      <BrowserRouter>
        <div className="main-page-layout">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
      )
    }
  }
 
export default Main;
