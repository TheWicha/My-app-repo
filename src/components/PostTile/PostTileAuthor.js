import React, { Component } from 'react';

class PostTileAuthor extends React.Component {


    render() {

      return ( 
        <div>
            <a className ="post-author-link" href="#">
                <div className="post-author">
                    <span>by </span>
                    <div> {this.props.author} </div>
                </div>
            </a>
        </div>
      )
    }
  }
 
export default PostTileAuthor;
