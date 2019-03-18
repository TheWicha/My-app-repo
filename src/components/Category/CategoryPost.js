import React from "react";
import CategoryPostImg from "./CategoryPostImg";
import CategoryPostContent from "./CategoryPostContent";


class CategoryPost extends React.Component {

  render() {

    return (

      <li key={this.props.id} className='category-post'>
        <a href={`/post/${this.props.slug}`} title={this.props.title}>
          <CategoryPostImg
            thumbnail={this.props.thumbnail}
          />
          <CategoryPostContent
            summary={this.props.summary}
            title={this.props.title}
          />
        </a>
      </li>
    )
  }
}

export default CategoryPost;
