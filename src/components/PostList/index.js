import React, { Component } from 'react';
import axios from 'axios'
import PostTile from '../PostTile';
import LoadBox from './LoadBox';
import ErrorBox from './ErrorBox';
const url = 'http://localhost:8080/posts';

class PostList  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [ {} ],
      isLoading: false,
      error: null,
    }
  }

getPosts = async () => {
    this.setState({ isLoading: true });

    try {
      const posts = await axios.get(url);

      this.setState({
        posts: posts.data, 
        isLoading: false, 
        error: null 
      });
    } catch(error) { 
      this.setState({ 
      error, 
      isLoading: false 
    })
  }
}

componentDidMount() {
    this.getPosts()
 }

  render() {
    const { posts, isLoading, error } = this.state

    if(error) {
      return <ErrorBox 
                error={error}
                getPosts={this.getPosts}
            />
    }
    
    if(isLoading) {
      return <LoadBox />
    }

    return (
      <div className="post-list-wrapper">
        <div className='post-list-header'>
          <h3>Most Recent</h3>
        </div>
        <div className="post-list">
          {
            posts.map(post => 
              <PostTile
                id={post.id} 
                author={post.author} 
                title={post.title} 
                content={post.content}
              />
            )
          }
        </div>  
      </div>
    )
  }
}
 
export default PostList;
