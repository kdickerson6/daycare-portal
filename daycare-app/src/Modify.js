import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';
import firebase from './firebase.js';
import ModifyForm from './ModifyForm.js';

class Modify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_members: [], 
            teacher_members: [],
            displayForm: false, 
            currentId: ''
        }
    }

    componentDidMount() {
        const studentsRef = firebase.database().ref('daycare/students');
        studentsRef.on('value', (snapshot) => {
            let members = snapshot.val();
            let newState = [];
            for(let member in members) {
                newState.push({
                    student_id: members[member].id, 
                    student_name: members[member].first_name + ' ' + members[member].last_name,
                    student_check_in_out: members[member].latest_check.type, 
                    student_check_in_out_time: members[member].latest_check.time 
                })
            }
            this.setState({student_members: newState});
        });

        const teachersRef = firebase.database().ref('daycare/teachers');
        teachersRef.on('value', (snapshot) => {
            let members = snapshot.val();
            let newState = [];
            for(let member in members) {
                newState.push({
                    teacher_id: members[member].id, 
                    teacher_name: members[member].first_name + ' ' + members[member].last_name,
                    teacher_check_in_out: members[member].latest_check.type, 
                    teacher_check_in_out_time: members[member].latest_check.time 
                })
            }
            this.setState({teacher_members: newState});
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
                <div>
                <h4>Students</h4>
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
                    {this.state.student_members.map((member) => {
                        var currentId = member.student_id;
                        return(
                            <tr>
                                <td>{member.student_id}</td>
                                <td>{member.student_name}</td>
                                <td>check {member.student_check_in_out}</td>
                                <td>{member.student_check_in_out_time}</td>
                                <td><Button waves='light' onClick={this.handleEditClick.bind(this, currentId)}>Edit</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>

                <h4>Teachers</h4>
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
                    {this.state.teacher_members.map((member) => {
                        var currentId = member.teacher_id;
                        return(
                            <tr>
                                <td>{member.teacher_id}</td>
                                <td>{member.teacher_name}</td>
                                <td>check {member.teacher_check_in_out}</td>
                                <td>{member.teacher_check_in_out_time}</td>
                                <td><Button waves='light' disabled>Edit</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
                </Table>
                </div>
                }
            </div>
        );
    }
}

export default Modify; 