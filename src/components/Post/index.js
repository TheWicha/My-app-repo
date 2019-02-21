import React, { Component } from "react";
import axios from 'axios'
import LoadBox from '../Home/LoadBox';
import ErrorBox from '../Home/ErrorBox';
const url = 'http://localhost:8080/json/post/';


class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
          post: {},
          isLoading: false,
          error: null,
        }
      }
    
    getPost = async () => {
        this.setState({ isLoading: true });
    
        try {
          const post = await axios.get(`${url}${this.props.match.params.slug}`);
          this.setState({
            
            post: post.data[0], 
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
        this.getPost()
     }
    
      render() {
        const { post, isLoading, error } = this.state
    
        if(error) {
          return <ErrorBox 
                    error={error}
                    getPost={this.getPost}
                />
        }
        
        if(isLoading) {
          return <LoadBox />
        }       
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <img src={post.image}></img>
        <div className="post-author">
          <p>,by</p>
          <p>{post.author}</p>
        </div>
        <p> {post.content}</p>
      </div>
    );
  }
}

export default Post;