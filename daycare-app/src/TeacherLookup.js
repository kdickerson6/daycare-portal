import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize'
import TeacherInfo from './TeacherInfo.js';

class TeacherLookup extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: '',
            displayInfo: false
        }
    }

    handleInputChange(e){
        this.setState({id: e.target.value});
        console.log("ID VAL: " + e.target.value);
    }

    handleSearchClick() {
        this.setState({displayInfo: true});
    }

    handleBackClick() {
        this.setState({id: '', displayInfo: false});
    }

    render() {
        const shouldDisplayInfo = this.state.displayInfo;
        return(
            <div className="Lookup">
                {shouldDisplayInfo ? <TeacherInfo backClickHandler={this.handleBackClick.bind(this)} id={this.state.id}/> : 
                <div>
                <h4>Please enter a Teacher ID to retrieve Teacher information.</h4>
                <Row>
                    <Col offset="s3 m3 l4"></Col>
                    <Input s={6} m={6} l={4} label="Teacher ID" onChange={this.handleInputChange.bind(this)} />
                </Row>
                <Row>
                    <Button waves='light' onClick={this.handleSearchClick.bind(this)}>Search</Button>
                </Row>
                </div>
                }
            </div>
        );
    }
}

export default TeacherLookup;