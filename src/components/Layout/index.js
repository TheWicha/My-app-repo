import React from 'react';
import Header from '../Header' 
import Footer from '../Footer';


const layoutHoc = (Component) => (props) => {
    
      return (
          <div className="main-page-layout">
            <Header isUnderlined={props.match.path !== '/'} />
            <div className="content">
                <Component {...props}/>
            </div>
            <Footer />
          </div>
      )
  }
 
export default layoutHoc;
