import React from 'react';

// ==== HOC (higher order comp) ==================================

 function MyMessageHoc(props) {
    return <div className="row">Using  {props.name}</div>;
}

export default  MyMessageHoc ;

//  <MyMessageHoc  name="HOC" />