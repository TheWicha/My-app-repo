import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class PostTileBtn extends React.Component {


    render() {

      return <NavLink className="post-btn-link" to={`/post/${this.props.slug}`}>
                <button className="post-btn">Get the recipe</button>
            </NavLink>
    }
  }
 
export default PostTileBtn;
