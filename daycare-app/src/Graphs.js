import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';

class Graphs extends Component {
    render() {
        return(
            <div>
                <h4>Teacher graphs and stuff </h4>
                <Row>
                    <Col offset="s2 m2 l3" s={6} m={4} l={4}><Icon large>insert_chart</Icon></Col>
                    <Col s={6} m={4} l={4}><Icon large>insert_chart</Icon></Col>
                </Row>
            </div>
        );
    }
}

export default Graphs;

