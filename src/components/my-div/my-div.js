
import React, {Component} from 'react';

class MyDiv1 extends Component {

        constructor(props) {
            super(props);
            console.log("constr -- prop: ",   this.props.name) ;
        }

  //      componentWillMount() { console.log("componentWillMount") ; }

         render() {
             console.log("render") ;
             return <div>JS: {this.props.name}</div>;
         }

        componentDidMount() { console.log("componentDidMount: ", this.props.name) ; }
        componentWillUnmount() {console.log("componentWillUnmount:", this.props.name) ; }

    }

    export default MyDiv1 ;