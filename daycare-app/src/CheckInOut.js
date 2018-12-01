import React, { Component } from 'react';
import { Button } from 'react-materialize';

let peopleData = require('./testData.json');
let testPerson = peopleData.persons[1];

class CheckInOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkIn: true
        }
    }

    getLastAction() {
        if(testPerson.last_action.type === "check_in") {
            this.setState({checkIn: true});
        } else if(testPerson.last_action.type === "check_out") {
            this.setState({checkIn: false});
        }
    }

    render() {
        this.getLastAction.bind(this);
        const isCheckIn = this.state.checkIn;

        // Need to be able to query firebase and get the person's last action (check in or out) and display here 
        return(
            <div className="CheckInOut">
            <div className="personInfo">
                <h4>ID NUMBER: {this.props.currentId}</h4>
                <h4>Name: {testPerson.name}</h4>
            </div>

            <div>{isCheckIn ? <h5>Last Check Out Time: {testPerson.last_action.time}</h5> : <h5>Last Check In Time: {testPerson.last_action.time}</h5>} </div>
            <div>{isCheckIn ? <Button waves='light'>CHECKIN</Button> : <Button waves='light'>CHECKOUT</Button>}</div>
            </div>          
        );
    }
}

export default CheckInOut;