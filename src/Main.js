import React, { Component } from 'react';
import Header from './components/Header' 
import Home from './components/Home';
import Recipe from './components/Recipe';
import About from './components/About';
import Footer from './components/Footer';
import Post from './components/Post'
import { Route, BrowserRouter } from "react-router-dom";


class Main  extends React.Component {

  render() {
      return (
      <BrowserRouter>
        <div className="main-page-layout">
        <Header />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/recipe-index" component={Recipe} />
            <Route path="/about" component={About} />
            <Route path="/post/:slug" component={Post} />
        </div>
          <Footer />
        </div>
      </BrowserRouter>
      )
    }
  }
 
export default Main;
