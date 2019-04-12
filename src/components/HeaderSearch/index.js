import React, { Component } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import SearchResult from './SearchResult'
import '../../images/icon-search.svg'
const url = 'http://localhost:8080/json/posts';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [{
        title: '',
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
      if (this.state.query && this.state.query.length >= 1) {
        this.getPosts()
      }
    })
  }

  render() {
    const { posts } = this.state;
    const { query } = this.state;
    const search = query.toLowerCase().trim()
    const filtered = posts.filter(p => p.title.toLowerCase().match(search))

    return (
      <div className='inner-header-search'>
        <form className='search-form'>
          <label className='search-label'>Find a recipe:</label>
          <input
            className="s"
            type='search'
            ref={input => this.search = input}
            onChange={this.handleInputChange}>
          </input>
          <SearchResult posts={filtered}
                        search={search}
          />
          <input className="search-btn" type='submit' value="Search"></input>
        </form>
      </div>)
  }
}

export default HeaderSearch;
