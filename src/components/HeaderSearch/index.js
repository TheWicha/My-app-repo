import React, { Component } from 'react';


class HeaderSearch extends React.Component {
    render() {
           return <div className='inner-header-search'>
                    <form role='search' method='get' className='search-form'>
                        <label className='search-label'>Find a recipe:</label>
                        <input type='search'></input>
                    </form>
                </div>
    }
  }
 
export default HeaderSearch;
