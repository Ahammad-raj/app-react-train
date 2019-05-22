import React, { Component } from 'react';

class MyInput17 extends Component{
    constructor(props){
        super(props);
        this.state =  {value: 'Data Binding: '};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        let value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange} />
                <p>{value}</p>
            </div>
        );
    }
}

export  default MyInput17 ;