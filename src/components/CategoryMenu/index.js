import React from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
const url = ''


class CategoryMenu extends React.Component {

  render() {

    return (
      <div className="category-menu">
        <div className="category-list-container"> <span className="cat-span">Categories:</span>
            <ul className="category-list">
                <a href="#"><li><span> One Pot </span></li></a>
                <a href="#"><li><span>  Baking </span></li></a>
                <a href="#"><li><span>  Budget </span></li></a>
                <a href="#"><li><span>  How to </span></li></a>
            </ul>
        </div>
      </div>
    )
  }
}

export default CategoryMenu;
