import React, { Component } from 'react';
import firebase from './firebase.js';

class Confirmation extends Component {
    componentDidMount() {
        if(this.props.role === 'student') {
            firebase.database().ref('daycare/students/' + this.props.id + '/latest_check').update({
                'time': this.props.time, 
                'type': this.props.action
            });
        } else if(this.props.role === 'teacher') {
            firebase.database().ref('daycare/teachers/' + this.props.id + '/latest_check').update({
                'time': this.props.time, 
                'type': this.props.action
            });
        }
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