import React, { Component } from 'react';
import PostTileImg from './PostTileImg'
import PostTileAuthor from './PostTileAuthor'
import PostTileTitle from './PostTileTitle'
import PostTileContent from './PostTileContent'
import PostTileBtn from './PostTileBtn'


class PostTile extends React.Component {


    render() {

      return (
        <div key={this.props.id} className="post-tile">
            <div className='post-content-wrapper'>             
                <PostTileImg 
                    slug={this.props.slug}
                    thumbnail={this.props.thumbnail} 
                />
                <PostTileAuthor 
                    author={this.props.author}
                />    
                <PostTileTitle
                    title={this.props.title}
                    slug={this.props.slug}
                />
                <PostTileContent 
                    content={this.props.content}
                />
                <PostTileBtn
                    slug={this.props.slug}
                />
            </div>    
        </div>
      )
    }
  }
 
export default PostTile;
