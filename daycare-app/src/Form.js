import React, {Component} from 'react';
import {Row, Input, Col} from 'react-materialize';

class Form extends Component {
    render() {
        return(
            <div>
            <h4>Please enter your ID to check in or check out. </h4>
            <Row>
                <Col offset="s3 m3 l4"></Col>
                <Input s={6} m={6} l={4} label="Parent ID" />
            </Row>
            </div>
        );
    }
}

export default Form; 