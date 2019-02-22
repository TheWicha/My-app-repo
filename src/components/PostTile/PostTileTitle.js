import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class PostTileImg extends React.Component {


    render() {

      return ( 
        <h2 className="post-title-link">
            <NavLink to={`/post/${this.props.slug}`}>
                <span>{this.props.title}</span>
            </NavLink>
        </h2>
      )
    }
  }
 
export default PostTileImg;
