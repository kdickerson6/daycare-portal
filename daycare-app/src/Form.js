import React, {Component} from 'react';
import {Row, Input, Col, Button} from 'react-materialize';

class Form extends Component {
    handleEnterClick() {
        this.props.enterClickHandler();
    }

    render() {
        return(
            <div>
                <h4>Please enter your ID to check in or check out. </h4>
                <Row>
                    <Col offset="s3 m3 l4"></Col>
                    <Input s={6} m={6} l={4} label="Parent or Teacher ID" />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.handleEnterClick.bind(this)}>Enter</Button>
                </Row>
            </div>
        );
    }
}

export default Form; 