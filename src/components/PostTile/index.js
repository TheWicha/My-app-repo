import React, { Component } from 'react';
import '../../images/Valentines-Day-HERO.jpg'




class PostTile extends React.Component {
    
    render() {
      return <div key={this.props.id} className="post-tile">
                <div className='post-content-wrapper'>    
                    <div className="post-image">
                        <a href="#">
                            <img src='/images/Valentines-Day-HERO.jpg' />
                        </a>
                    </div>
                    <a className ="post-author-link" href="#">
                        <div className="post-author">
                            {this.props.author}
                        </div>
                    </a>
                    <h2 className="post-title-link">
                        <a href="#">
                            <span>{this.props.title}</span>
                        </a>
                    </h2>
                    <div className='post-content'>
                        {this.props.content}
                    </div>
                    <a className="post-btn-link" href='#'>
                        <button className="post-btn">Get the recipe</button>
                    </a>
                </div>    
             </div>
    }
  }
 
export default PostTile;
