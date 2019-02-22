import React, { Component } from 'react';
import trimm from '../../libs/trimm'
import { NavLink } from "react-router-dom";

const trimmWithDots = trimm('...', 250)


class PostTile extends React.Component {


    render() {

      return <div key={this.props.id} className="post-tile">
                <div className='post-content-wrapper'>    
                    <div className="post-image">
                        <NavLink to={`/post/${this.props.slug}`}>
                            <img src={this.props.thumbnail}/>
                        </NavLink>
                    </div>
                    <a className ="post-author-link" href="#">
                        <div className="post-author">
                            {this.props.author}
                        </div>
                    </a>
                    <h2 className="post-title-link">
                        <NavLink to={`/post/${this.props.slug}`}>
                            <span>{this.props.title}</span>
                        </NavLink>
                    </h2>
                    <div className='post-content'>
                        {trimmWithDots(this.props.content)}
                    </div>
                    <NavLink className="post-btn-link" to={`/post/${this.props.slug}`}>
                        <button className="post-btn">Get the recipe</button>
                    </NavLink>
                </div>    
             </div>
    }
  }
 
export default PostTile;
