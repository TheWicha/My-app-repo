import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="about-content">
            <h1>About My-App Recipes</h1>
            <img src={this.props.src}></img>
            <h2>Hello and welcome to My-app Recipes</h2>
            <p>
            Thank you so much for stopping by the site! If you are new to Simply Recipes,
            the one thing you should know about us is that we are obsessed with
            creating scratch cooking recipes that you will love.
            </p>
            <h2>Recipes that work</h2>
            <p>
            There are two things we think about when deciding if a recipe is good enough to go on the site.
            </p>
            <p>
            First, does it work? Does the dish make us smile inside and out? Do we want to eat the whole batch by ourselves? 
            </p>
            <p>
            Second, if the dish tastes great, is it worth the effort? Do we want to make it again (and again and again)?
            </p>
            <p>
            This is what we strive for—recipes you can rely on to work every time and be worth your time, effort, and $$ to make!
            </p>
        </div>
      </div>
    );
  }
}

export default AboutContent;