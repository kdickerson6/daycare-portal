import React, { Component } from 'react'; 
import { Button } from 'react-materialize';
import firebase from './firebase.js'; 

class TeacherInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            address:'',
            phone: '',
            emergency_contact_name: '',
            emergency_contact_relationship: '',
            group: ''
        };
    }

    componentDidMount() {
        this.setState({id: this.props.id});
        console.log('id' + this.props.id);
        const memberRef = firebase.database().ref('daycare/teachers/' + this.props.id);
        memberRef.on('value', (snapshot) => {
            let member = snapshot.val();
            let contactInfo = member.contact_info;
            let teacherDetails = member.teacher_details; 
            this.setState({
                name: member.first_name + ' ' + member.last_name,
                address: contactInfo.street_address + ' ' + contactInfo.city + ' ' + contactInfo.state + ' ' + contactInfo.postal_code,
                phone: contactInfo.phone,
                certification: teacherDetails.certification, 
                hireDate: teacherDetails.hire_date, 
                shift: teacherDetails.shift
            });
        });
    }

    backClickHandler() {
        this.props.backClickHandler();
    }

    render() {
        return(
            <div>
                <h4>Information</h4>
                <h5>Name: {this.state.name}</h5>
                <h5>Address: {this.state.address}</h5>
                <h5>Phone: {this.state.phone}</h5>
                <h5>Certification: {this.state.certification}</h5>
                <h5>Hire Date: {this.state.hireDate}</h5>
                <h5>Shift: {this.state.shift}</h5>
                <Button waves='light' onClick={this.backClickHandler.bind(this)}>Back</Button>
            </div>
        );
    }
}

export default TeacherInfo; 