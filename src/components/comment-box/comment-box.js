import React, { Component } from 'react';
import MyProps from '../my-props/my-props';

class  CommentBox extends Component{
    render(){
        let  status = "empty" ;
      return (
        <div className="myBox">
          This is an  info Box, which is currently {status}.
          <MyProps  name="the best" />
        </div>
        
      );
    }  // eo render()
  }
  
  export default CommentBox ;