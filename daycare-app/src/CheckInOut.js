import React, { Component } from 'react';
import { Button } from 'react-materialize';
import Confirmation from './Confirmation.js';
import firebase from './firebase.js'

class CheckInOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkIn: true,
            confirmed: false,
            action: '',
            person_name: '',
            person_time: '', 
            person_id: '',
            current_time: ''
        }
    }

    componentDidMount() {
        this.setState({person_id : this.props.currentId});
        const memberRef = firebase.database().ref('daycare/' + this.props.currentId);
        memberRef.on('value',(snapshot) => {
            let member = snapshot.val();
            let memberName = member.first_name + ' ' + member.last_name;
            let lastAction = member.latest_check.type;
            if(lastAction === 'in') {
                this.setState({
                    checkIn: true, 
                    person_name: memberName,
                    person_time: member.latest_check.time
                });
            } else if (lastAction === 'out') {
                this.setState({
                    checkIn: false, 
                    person_name: memberName,
                    person_time: member.latest_check.time
                })
            }
        })
    }

    cancelClickHandler() {
        this.props.cancelClickHandler();
    }

    checkInOutHandler() {
        // For now console logging -- will obviously store something in the DB
        var currentTimestamp = new Date().toUTCString();

        if(this.state.checkIn) {
            console.log('Check OUT Recorded');
            this.setState({action: 'out'});
            console.log('Checked OUT at ' + currentTimestamp);
        } else {
            console.log('Check IN Recorded');
            this.setState({action: 'in'});
            console.log('Checked IN at ' + currentTimestamp);
        }

        this.setState({confirmed: true, current_time: currentTimestamp});
    }

    render() {
        const isCheckIn = this.state.checkIn;
        const isConfirmed = this.state.confirmed;
        
        return(
            <div className='CheckInOut'>
            {isConfirmed ? <Confirmation action={this.state.action} time={this.state.current_time} id={this.state.person_id}/>
                :
                <div className='PersonInfo'>
                    <h4>ID NUMBER: {this.props.currentId}</h4>
                    <h4>Name: {this.state.person_name}</h4>
                    {isCheckIn ? <h5>Last Check In Time: {this.state.person_time}</h5> : <h5>Last Check Out Time: {this.state.person_time}</h5>}
                    <Button className='red lighten-2' waves='light' onClick={this.cancelClickHandler.bind(this)}>CANCEL</Button> {isCheckIn ? <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKOUT</Button> : <Button waves='light' onClick={this.checkInOutHandler.bind(this)}>CHECKIN</Button>}
                </div>}       
            </div>
        );
    }
}

export default CheckInOut;