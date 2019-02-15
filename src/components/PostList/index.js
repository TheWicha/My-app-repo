import React, { Component } from 'react';
import PostTile from '../PostTile';

class PostList  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [ {} ],
      isLoading: false,
      error: null,
    }
  }

  fetchData = (shouldThrow) =>{
    return fetch(`http://localhost:8080/posts${shouldThrow ? 'error=true : ''}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw Error('somthing went wrong');
      }
    })
    .then(posts => this.setState({ posts, isLoading: false }))
    .catch(error => this.setState({ error, isLoading: false }))
  };

  componentDidMount() {

    this.setState({ isLoading: true });
    this.fetchData(true)
 }

  render() {
    const { posts, isLoading, error } = this.state

    if(error) {
      return (
      <div className="error"> 
        <p className='error-msg'>{error.message}</p>
        <p className='error-click'onClick={this.fetchData}>Please try again</p>

      </div>)
    }
    
    if(isLoading) {
      return <div className="load-wrapp">
          <div className="load-1">
              <p>Loading...</p>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
        </div>
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






