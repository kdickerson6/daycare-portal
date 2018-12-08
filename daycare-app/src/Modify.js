import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import firebase from './firebase.js';
import ModifyForm from './ModifyForm.js';

class Modify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [], 
            displayForm: false, 
            currentId: ''
        }
    }

    componentDidMount() {
        const daycareRef = firebase.database().ref('daycare/');
        daycareRef.on('value', (snapshot) => {
            let members = snapshot.val();
            let newState = [];
            for(let member in members) {
                newState.push({
                    id: members[member].id, 
                    name: members[member].first_name + ' ' + members[member].last_name,
                    check_in_out: members[member].latest_check.type, 
                    check_in_out_time: members[member].latest_check.time 
                })
            }
            this.setState({members: newState});
        });
    }

    handleEditClick(id) {
        this.setState({displayForm: true, currentId: id});
    }

    handleBackClick() {
        this.setState({displayForm: false});
    }

    render() {
        const shouldDisplayForm = this.state.displayForm;
        return(
            <div>
                { shouldDisplayForm ? 
                <ModifyForm backClickHandler={this.handleBackClick.bind(this)} currentId={this.state.currentId}/> : 
                <Table>
                <thead>
                    <tr>
                    <th data-field="id">ID</th>
                    <th data-field="name">Name</th>
                    <th data-field="check-in-out">Check In / Out</th>
                    <th data-field="time">Time</th>
                    <th data-field="modify">Modify</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.members.map((member) => {
                        var currentId = member.id;
                        return(
                            <tr>
                                <td>{member.id}</td>
                                <td>{member.name}</td>
                                <td>check {member.check_in_out}</td>
                                <td>{member.check_in_out_time}</td>
                                <td><Button waves='light' onClick={this.handleEditClick.bind(this, currentId)}>Edit</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                }
            </div>
        );
    }
}

export default Modify; 