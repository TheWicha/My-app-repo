import React, { Component } from 'react';
import '../../images/Valentines-Day-HERO.jpg'
import { NavLink } from "react-router-dom";




class PostTile extends React.Component {

    trimPostLength = post => {
        const maxLength = 200;
        const trimmingChars = '...'
        const trimmedPost = (post.length > maxLength) ? post.substring(0, maxLength) : post
        const trimmedWithNoSpace = (trimmedPost.slice(-1) == ' ') ? trimmedPost.replace(/\s*$/,'') : trimmedPost
        
        return `${trimmedWithNoSpace}${trimmingChars}`
    }

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
                        {this.trimPostLength(this.props.content)}
                    </div>
                    <NavLink className="post-btn-link" to={`/post/${this.props.slug}`}>
                        <button className="post-btn">Get the recipe</button>
                    </NavLink>
                </div>    
             </div>
    }
  }
 
export default PostTile;
