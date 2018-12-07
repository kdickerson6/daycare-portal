import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Confirmation from './Confirmation.js';

let peopleData = require('./testData.json');
let testPerson = peopleData.daycare.member;

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
        if(testPerson.latest_check.type === 'in') {
            this.setState({checkIn: true});
        } else if(testPerson.latest_check.type === 'out') {
            this.setState({checkIn: false});
        }
    }

    cancelClickHandler() {
        this.props.cancelClickHandler();
    }

    checkInOutHandler() {
        // For now console logging -- will obviously store something in the DB
        var currentTimestamp = new Date().toUTCString();

        if(this.state.checkIn) {
            console.log('Check OUT Recorded');
            this.setState({action: 'checked in'});
            console.log('Checked OUT at ' + currentTimestamp);
        } else {
            console.log('Check IN Recorded');
            this.setState({action: 'checked out'});
            console.log('Checked IN at ' + currentTimestamp);
        }

        this.setState({confirmed: true});
    }

    render() {
        this.getLastAction();
        const isCheckIn = this.state.checkIn;
        const isConfirmed = this.state.confirmed;

        // Need to be able to query firebase and get the person's last action (check in or out) and display here 
        return(
            <div className='CheckInOut'>
            {isConfirmed ? <Confirmation action={this.state.action}/>
                :
                <div className='PersonInfo'>
                    <h4>ID NUMBER: {this.props.currentId}</h4>
                    <h4>Name: {testPerson.first_name + ' ' + testPerson.last_name}</h4>
                    {isCheckIn ? <h5>Last Check In Time: {testPerson.latest_check.time}</h5> : <h5>Last Check Out Time: {testPerson.latest_check.time}</h5>}
                    <Button className='red lighten-2' waves='light' onClick={this.cancelClickHandler.bind(this)}>CANCEL</Button> {isCheckIn ? <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKOUT</Button> : <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKIN</Button>}
                </div>}       
            </div>
        );
    }
}

export default CheckInOut;