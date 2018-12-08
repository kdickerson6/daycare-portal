import React, {Component} from 'react';
import {Row, Input, Col, Button} from 'react-materialize';

class Form extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            id: ''
        }
    }

    handleInputChange(e){
        this.setState({id: e.target.value});
    }

    enterClickHandler() {
        var id = this.state.id;
        console.log('entered id:  ', id);
        this.props.enterClickHandler(this.state.id);
    }

    render() {
        return(
            <div>
                <h4>Please enter your ID to check in or check out. </h4>
                <Row>
                    <Col offset="s3 m3 l4"></Col>
                    <Input s={6} m={6} l={4} label="Student or Teacher ID" onChange={this.handleInputChange.bind(this)} />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.enterClickHandler.bind(this)}>Enter</Button>
                </Row>
            </div>
        );
    }
}

export default Form; 