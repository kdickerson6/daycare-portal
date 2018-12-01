import React, { Component } from 'react'; 

class Confirmation extends Component {
    render() {
        return(
            <h4>Thank you! You have been successfully {this.props.action}!</h4>
        );
    }
}

export default Confirmation; 