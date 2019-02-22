import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class PostTileImg extends React.Component {


    render() {

      return ( 
        <div className="post-image">
            <NavLink to={`/post/${this.props.slug}`}>
                <img src={this.props.thumbnail}/>
            </NavLink>
        </div>
      )
    }
  }
 
export default PostTileImg;
