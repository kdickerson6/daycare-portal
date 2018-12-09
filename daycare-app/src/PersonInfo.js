import React, { Component } from 'react'; 
import { Button } from 'react-materialize';
import firebase from './firebase.js'; 
import ModifyForm from './ModifyForm.js';

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
            group: '', 
            displayModify: false
        };
    }

    componentDidMount() {
        this.setState({id: this.props.id});
        console.log('id' + this.props.id);
        const memberRef = firebase.database().ref('daycare/students/' + this.props.id);
        memberRef.on('value', (snapshot) => {
            let member = snapshot.val();
            let contactInfo = member.contact_info;
            let group = member.group;
            let emergencyContact = member.emergency_contact; 
            let parent = member.parent;
            this.setState({
                name: member.first_name + ' ' + member.last_name,
                address: contactInfo.street_address + ' ' + contactInfo.city + ' ' + contactInfo.state + ' ' + contactInfo.postal_code,
                phone: contactInfo.phone,
                group_id: group.id, 
                group_type: group.type,
                emergency_contact_name: emergencyContact.first_name + ' ' + emergencyContact.last_name,
                emergency_contact_relationship: emergencyContact.relationship,
                parent_name: parent.first_name + ' ' + parent.last_name,
                parent_email: parent.email,
                parent_phone: parent.phone

            });
        });
    }

    backClickHandler() {
        this.props.backClickHandler();
    }

    handleEditClick() {
        this.setState({displayModify: true});
    }

    render() {
        const shouldDisplayModify = this.state.displayModify;
        return(
            <div>
            {shouldDisplayModify ? <ModifyForm backClickHandler={this.backClickHandler.bind(this)} currentId={this.state.id}/> : 
                <div>
                <h4>Information</h4>
                <h5>Name: {this.state.name}</h5>
                <h5>Address: {this.state.address}</h5>
                <h5>Phone: {this.state.phone}</h5>
                <h5>Group {this.state.group_id} : {this.state.group_type}</h5>
                <h4>Emergency Information</h4>
                <h5>Emergency Contact: {this.state.emergency_contact_name}</h5>
                <h5>Emergency Phone: {this.state.phone}</h5>
                <h5>Relationship: {this.state.emergency_contact_relationship}</h5>
                <h4>Parent Information</h4>
                <h5>Name: {this.state.parent_name}</h5>
                <h5>Email: {this.state.parent_email}</h5>
                <h5>Phone: {this.state.parent_phone}</h5>
                <Button waves='light' onClick={this.backClickHandler.bind(this)}>Back</Button> <Button waves='light' onClick={this.handleEditClick.bind(this)}>Edit</Button>
            </div>}
            </div>
        );
    }
}

export default PersonInfo; 