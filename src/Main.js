import React, { Component } from 'react';
import Header from './components/Header' 
import PostList from './components/PostList';
import PostTile from './components/PostTile';


class Main  extends React.Component {
    render() {
      return <div className="main-page-layout">
                <Header />
                <PostList> 
                  <PostTile />
                  <PostTile />
                  <PostTile />
                  <PostTile />
                  <PostTile />
                  <PostTile />
                </PostList>
             </div>
    }
  }
 
export default Main;