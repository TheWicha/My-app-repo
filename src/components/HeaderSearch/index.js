import React, { Component } from 'react';
import '../../images/icon-search.svg'


class HeaderSearch extends React.Component {
    render() {
           return <div className='inner-header-search'>
                    <form role='search' method='get' className='search-form'>
                        <label className='search-label'>Find a recipe:</label>
                        <input className ="s" type='search'></input>
                        <input className="search-btn" type='submit' value="Search"></input>
                    </form>
                </div>
    }
  }
 
export default HeaderSearch;
