import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import Recipe from './components/Recipe';
import About from './components/About';
import Post from './components/Post'
import Advertise from './components/Advertise'
import PrivacyPolicy from './components/PrivacyPolicy';
import layoutHoc from './components/Layout'


class Main  extends React.Component {

  render() { 
      return (
        <BrowserRouter>
          <Route exact path="/"  component={layoutHoc(Home)} />
          <Route path="/recipe-index" component={layoutHoc(Recipe)} />
          <Route path="/about" component={layoutHoc(About)} />
          <Route path="/post/:slug" component={layoutHoc(Post)} />
          <Route path="/advertise" component={layoutHoc(Advertise)} />
          <Route path="/privacy-policy" component={layoutHoc(PrivacyPolicy)} />
        </BrowserRouter>
      )
    }
  }
 
export default Main;
