import React, { Component } from 'react';
import Header from './components/Header' 
import PostList from './components/PostList';



class Main  extends React.Component {

  render() {
      return <div className="main-page-layout">
                <Header />
                <PostList />
             </div>
    }
  }
 
export default Main;