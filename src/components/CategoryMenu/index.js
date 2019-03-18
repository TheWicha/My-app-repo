import React from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";
const url = 'http://localhost:8080/json/categories'


class CategoryMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [ {
        content: ''
      } ],
    }
  }

  getCategories = async () => {
    try {
      const categories = await axios.get(url);

      this.setState({
        categories: categories.data 
      });
    } catch(error) { 
      this.setState({ 
      error,
    })
  }
}

componentDidMount() {
    this.getCategories()
 }


  render() {

    const { categories } = this.state;
    return (
      <div className="category-menu">
        <div className="category-list-container"> 
            <span className="cat-span">Categories:</span>
            <ul className="category-list">
                {
                  categories.map(category => 
                    <NavLink to={`/category/${category.slug}`}>
                      <li><span>{ category.name }</span></li>
                    </NavLink>
                  )
                }
            </ul>
        </div>
      </div>
    )
  }
}

export default CategoryMenu;
