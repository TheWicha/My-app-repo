import React, { Component } from 'react';
import Octicon, {Book} from '@githubprimer/octicons-react';

class NavLogo extends React.Component {
    render() {
      return <div className='nav-logo'>
                <a href='#' >
                    <Octicon icon={Book} size='large' ariaLabel='Blog'/>
                </a>
            </div>
    }
  }
 
export default NavLogo;