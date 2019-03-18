import React from "react";

class CategoryPostContent extends React.Component {

  render() {

    return (
      <div className='category-post-content'>
        <header className='category-post-header'><h2>{this.props.title}</h2></header>
        <div className='category-post-text'> {this.props.summary} </div>
      </div>
    )
  }
}

export default CategoryPostContent;
