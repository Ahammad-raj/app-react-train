import React, { Component } from 'react';

class  MyButton extends Component{
    constructor(props){
        super(props);
        this.state = {liked: false};
        this.handleClick = this.handleClick.bind(this) ;
    }

    handleClick(event) {
        this.setState({liked: !this.state.liked});
    }
    render() {
        let  text = this.state.liked ? 'liked' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
}

export default MyButton ;