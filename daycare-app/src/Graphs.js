import React, { Component } from 'react';
import { Row, Col, Icon } from 'react-materialize';
import { LineChart } from 'react-chartkick';
import data from './chart_data.json';

class Graphs extends Component {
    render() {
        return(
            <div>
                <h4>Check In and Check Out Trends</h4>
                <Row>
                    <Col offset="s0 m1 l1" s={6} m={8} l={8}><LineChart data={data}/></Col>
                </Row>
            </div>
        );
    }
}

export default Graphs;

