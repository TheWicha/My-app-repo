import React, { Component } from 'react';
import trimm from '../../libs/trimm'
const trimmWithDots = trimm('...', 250)

class PostTileImg extends React.Component {


    render() {

      return <div className='post-content'>
                {trimmWithDots(this.props.content)}
            </div> 
    }
  }
 
export default PostTileImg;
