import React, { Component } from 'react';
import { Button } from 'react-materialize';

class CheckInOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            checkIn: true
        }
    }

    render() {
        const isCheckIn = this.state.checkIn;

        return(
            <div className="CheckInOut">
            <div>{isCheckIn ? <p>Last Check Out Time</p> : <p>Last Checkout Time </p>}</div>
            {isCheckIn ? <Button waves='light'>CHECKIN</Button> : <Button waves='light'>CHECKOUT</Button>}
            </div>          
        );
    }
}

export default CheckInOut;