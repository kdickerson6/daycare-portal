import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Confirmation from './Confirmation.js';

let peopleData = require('./testData.json');
let testPerson = peopleData.persons[1];

class CheckInOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkIn: true,
            confirmed: false,
            action: ''
        }
    }

    getLastAction() {
        if(testPerson.last_action.type === 'check_in') {
            this.setState({checkIn: true});
        } else if(testPerson.last_action.type === 'check_out') {
            this.setState({checkIn: false});
        }
    }

    cancelClickHandler() {
        this.props.cancelClickHandler();
    }

    checkInOutHandler() {
        // For now console logging -- will obviously store something in the DB
        if(this.state.checkIn) {
            console.log('Check IN Recorded');
            this.setState({action: 'checked in'});
        } else {
            console.log('Check OUT Recorded');
            this.setState({action: 'checked out'});
        }

        this.setState({confirmed: true});
    }

    render() {
        this.getLastAction.bind(this);
        const isCheckIn = this.state.checkIn;
        const isConfirmed = this.state.confirmed;

        // Need to be able to query firebase and get the person's last action (check in or out) and display here 
        return(
            <div className='CheckInOut'>
            {isConfirmed ? <Confirmation action={this.state.action}/>
                :
                <div className='PersonInfo'>
                    <h4>ID NUMBER: {this.props.currentId}</h4>
                    <h4>Name: {testPerson.name}</h4>
                    {isCheckIn ? <h5>Last Check Out Time: {testPerson.last_action.time}</h5> : <h5>Last Check In Time: {testPerson.last_action.time}</h5>}
                    <Button className='red lighten-2' waves='light' onClick={this.cancelClickHandler.bind(this)}>CANCEL</Button> {isCheckIn ? <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKIN</Button> : <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKOUT</Button>}
                </div>}       
            </div>
        );
    }
}

export default CheckInOut;