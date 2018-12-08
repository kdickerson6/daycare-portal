import React, { Component } from 'react'; 
import { Button } from 'react-materialize';
import firebase from './firebase.js'; 

class PersonInfo extends Component {
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
        const memberRef = firebase.database().ref('daycare/' + this.props.id);
        memberRef.on('value', (snapshot) => {
            let member = snapshot.val();
            let contactInfo = member.contact_info;
            let emergencyContact = member.emergency_contact; 
            this.setState({
                name: member.first_name + ' ' + member.last_name,
                address: contactInfo.street_address + ' ' + contactInfo.city + ' ' + contactInfo.state + ' ' + contactInfo.postal_code,
                phone: contactInfo.phone,
                emergency_contact_name: emergencyContact.first_name + ' ' + emergencyContact.last_name,
                emergency_contact_relationship: emergencyContact.relationship
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
                <h4>Emergency Information</h4>
                <h5>Emergency Contact: {this.state.emergency_contact_name}</h5>
                <h5>Relationship: {this.state.emergency_contact_relationship}</h5>
                <Button waves='light' onClick={this.backClickHandler.bind(this)}>Back</Button>
            </div>
        );
    }
}

export default PersonInfo; 