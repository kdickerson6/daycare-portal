import React, { Component } from 'react';
import firebase from './firebase.js';

class Confirmation extends Component {
    componentDidMount() {
        firebase.database().ref('daycare/' + this.props.id + '/latest_check').set({
            'check_by': this.props.id, // TODO: This isn't quite working, need to be able to link parent and children
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