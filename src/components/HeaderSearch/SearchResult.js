import React from 'react'
const url = "/post/"

const SearchResult = (props) => {

  const searched = props.posts.map(recipe => (
    <a href={`${url}${recipe.slug}`}>
      <li key={recipe.id}>
        <img src={recipe.thumbnail}></img>
        {recipe.title}
      </li>
    </a>

  ))
  if (props.search !== "" && props.posts.length >= 1) {
    return (
      <div className="search-list-container">
        <ul className="search-list">
          <h3>results:</h3>
          {searched}
        </ul>
      </div>
    )
  }
  return ""
}

export default SearchResult