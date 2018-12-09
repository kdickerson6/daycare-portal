import React, { Component } from 'react';
import { Tab, Tabs, Row } from 'react-materialize';
import Lookup from './Lookup.js';
import Modify from './Modify.js';
import TeacherLookup from './TeacherLookup.js';
import GroupLookup from './GroupLookup.js';

class AdminTabs extends Component {
    render() {
        return(
            <div className="Admin-tabs">
            <Row>
                <Tabs className='tab-demo z-depth-1'>
                    <Tab title="History" active><Modify/></Tab>
                    <Tab title="Student Lookup"><Lookup/></Tab>
                    <Tab title="Teacher Lookup"><TeacherLookup/></Tab>
                    <Tab title="Group Lookup"><GroupLookup/></Tab>
                </Tabs>
            </Row>
            </div>
        );
    }
}

export default AdminTabs;