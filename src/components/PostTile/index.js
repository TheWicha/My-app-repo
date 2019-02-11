import React, { Component } from 'react';
import '../../images/Valentines-Day-HERO.jpg'


class PostTile  extends React.Component {
    render() {
      return <div className="post-tile">
                <div className='post-content-wrapper'>    
                    <div className="post-image">
                        <a href="#">
                            <img src='/images/Valentines-Day-HERO.jpg' />
                        </a>
                    </div>
                    <a className ="post-author-link" href="#">
                        <div className="post-author">
                            Summer Miller
                        </div>
                    </a>
                    <h2 className="post-title-link">
                        <a href="#">
                            <span>Valentine’s Day Menu for a Date-Night In</span>
                        </a>
                    </h2>
                    <div className='post-content'>
                        Who's staying in for Valentine's Day?! We've got your whole menu ready to go. 
                        Choose from these great recipes and
                    </div>
                    <a className="post-btn-link" href="#">
                        <button className="post-btn">Get the recipe</button>
                    </a>
                </div>    
             </div>
    }
  }
 
export default PostTile;



<div className="postTile"> 

</div>