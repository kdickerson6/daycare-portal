import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'react-materialize';
import PersonInfo from './PersonInfo';

class Lookup extends Component {
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
                {shouldDisplayInfo ? <PersonInfo backClickHandler={this.handleBackClick.bind(this)} id={this.state.id}/> : 
                    <div>
                        <h4>Please enter a parent or teacher ID to retrieve information.</h4>
                        <Row>
                            <Col offset="s3 m3 l4"></Col>
                            <Input s={6} m={6} l={4} label="Student or Teacher ID" onChange={this.handleInputChange.bind(this)} />
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

export default Lookup;