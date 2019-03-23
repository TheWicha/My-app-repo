import React, { Component } from 'react';
import axios from 'axios';
import '../../images/icon-search.svg'
const url = 'http://localhost:8080/json/posts';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        content: ''
      }],
      error: null,
      query: '',
    }
  }
  getPosts = async () => {
    try {
      const posts = await axios.get(url);
      this.setState({
        posts: posts.data,
        error: null
      });
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getPosts()
        }
      }
    })
  }



  render() {
    return (
      <div className='inner-header-search'>
        <form className='search-form'>
          <label className='search-label'>Find a recipe:</label>
          <input
            className="s"
            type='search'
            ref={input => this.search = input}
            onChange={this.handleInputChange}></input>
          <input className="search-btn" type='submit' value="Search"></input>
        </form>
      </div>)
  }
}

export default HeaderSearch;
