import React, { Component } from 'react';
import GenericComponent2 from '../generic-component/generic-component';

class MyProps extends Component {
            render() {
                return <div>
                    <div>JS is {this.props.name} </div>
                    <GenericComponent2 />
                    <GenericComponent2 things="cadbury"/>
                </div>;
            }
        }

 export default MyProps ;