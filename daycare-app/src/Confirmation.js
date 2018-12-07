import React, { Component } from 'react'; 
import { Button} from 'react-materialize';

class Confirmation extends Component {
    render() {
        return(
            <div>
                <h4>Thank you! You have been successfully {this.props.action}!</h4>
            </div>
        );
    }
}

export default Confirmation; 