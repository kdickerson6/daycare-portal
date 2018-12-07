import React, { Component } from 'react';
import AdminTabs from './AdminTabs';
import Graphs from './Graphs';

class Admin extends Component {
    render() {
        return(
            <div>
                <AdminTabs/>
            </div>
        );
    }
}

export default Admin;