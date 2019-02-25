import React, { Component } from 'react'; 
import Home from '../Home';
import Recipe from '../Recipe';
import About from '../About';
import Post from '../Post'
import Advertise from '../Advertise'
import PrivacyPolicy from '../PrivacyPolicy';
import { Route } from "react-router-dom";



class Content extends React.Component {

  render() {
      return (
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/recipe-index" component={Recipe} />
            <Route path="/about" component={About} />
            <Route path="/post/:slug" component={Post} />
            <Route path="/advertise" component={Advertise} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
        </div>
      )
    }
  }
 
export default Content;
