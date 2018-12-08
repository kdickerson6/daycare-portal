import React, { Component } from 'react';
import firebase from './firebase.js';

class Confirmation extends Component {
    componentDidMount() {
        firebase.database().ref('daycare/' + this.props.id + '/latest_check').update({
            'time': this.props.time, 
            'type': this.props.action
        });
    }

    render() {
        return(
            <div>
                <h4>Thank you! You have been successfully <b>checked {this.props.action}!</b></h4>
            </div>
        );
    }
}

export default Confirmation; 