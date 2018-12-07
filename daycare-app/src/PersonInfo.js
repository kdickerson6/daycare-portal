import React, { Component } from 'react'; 
import { Button } from 'react-materialize';

class PersonInfo extends Component {

backClickHandler() {
    this.props.backClickHandler();
}

    render() {
        return(
            <div>
                <h4>Person Name</h4>
                <Button waves='light' onClick={this.backClickHandler.bind(this)}>Back</Button>
            </div>
        );
    }
}

export default PersonInfo; 