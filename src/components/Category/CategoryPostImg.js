import React from "react";


class CategoryPostImg extends React.Component {

    render() {

      return (
        <div className='category-post-img'>
            <img src={this.props.thumbnail}></img>
        </div>
      )
    }
  }
 
export default CategoryPostImg;
