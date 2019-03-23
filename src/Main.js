import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Recipe from './components/Recipe';
import About from './components/About';
import Post from './components/Post'
import Advertise from './components/Advertise'
import PrivacyPolicy from './components/PrivacyPolicy';
import layoutHoc from './components/Layout'
import NoMatch from './components/NoMatch'
import Category from './components/Category'


class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={layoutHoc(Home)} />
          <Route path="/recipe-index" component={layoutHoc(Recipe)} />
          <Route path="/about" component={layoutHoc(About)} />
          <Route path="/post/:slug" component={layoutHoc(Post)} />
          <Route path="/advertise" component={layoutHoc(Advertise)} />
          <Route path="/privacy-policy" component={layoutHoc(PrivacyPolicy)} />
          <Route path="/category/:slug" component={layoutHoc(Category)} />
          <Route component={layoutHoc(NoMatch)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Main;
