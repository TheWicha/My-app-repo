import React, { Component } from 'react';


class PostList  extends React.Component {
    render() {
      return <div className="post-list-wrapper">
                <div className='post-list-header'>
                  <h3>Most Recent</h3>
                </div>
                <div className="post-list">
                  {this.props.children}
                </div>  
             </div>
    }
  }
 
export default PostList;