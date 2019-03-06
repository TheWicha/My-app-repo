import React from 'react';
import axios from 'axios';
import PostTile from '../PostTile';
import Slider from '../Slider';
import LoadBox from './LoadBox';
import ErrorBox from './ErrorBox';
import CategoryMenu from '../CategoryMenu';
const url = 'http://localhost:8080/json/posts';


class Home extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      posts: [ {
        content: ''
      } ],
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
      <div>
      <Slider />
      <CategoryMenu />
      <div className="post-list-wrapper">
        <div className='post-list-header'>
          <h3>Most Recent</h3>
        </div>
        <div className="post-list">
          {
            posts.map(post => 
              <PostTile
                thumbnail={post.thumbnail}
                image={post.image}
                slug={post.slug} 
                author={post.author} 
                title={post.title} 
                content={post.content}
              />
            )
          }
        </div>  
      </div>
      </div>
    )
  }
}

export default Home;
