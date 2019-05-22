import React, { Component } from 'react';


class GenericComponent2 extends Component {
    constructor(props) {
        super(props);
        this.state = { thing: this.props.things };
        console.log("constructor: " ,  this.props.things) ;
    }

    render () {
        console.log("render: " ,  this.props.things) ;
         return( <div> {this.props.things} </div>)
     }
}
GenericComponent2.defaultProps = { things: "biscuit" };

export default GenericComponent2 ;

