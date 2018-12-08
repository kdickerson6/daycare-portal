import React, { Component } from 'react';
import { Tab, Tabs, Row } from 'react-materialize';
import Graphs from './Graphs.js';
import Lookup from './Lookup.js';
import Modify from './Modify.js';

class AdminTabs extends Component {
    render() {
        return(
            <div className="Admin-tabs">
            <Row>
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="History" active><Modify/></Tab>
                    <Tab title="Lookup"><Lookup/></Tab>
                    <Tab title="Dashboard"><Graphs/></Tab>
                </Tabs>
            </Row>
            </div>
        );
    }
}

export default AdminTabs;