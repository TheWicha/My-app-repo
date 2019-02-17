import React, { Component } from 'react';
import Header from './components/Header' 
import PostList from './components/PostList';
import Footer from './components/Footer';



class Main  extends React.Component {

  render() {
      return <div className="main-page-layout">
                <Header />
                <PostList />
                <Footer />
             </div>
    }
  }
 
export default Main;