import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import firebase from './firebase.js';

class ModifyForm extends Component {
    componentWillMount() {
        const memberRef = firebase.database().ref('daycare/' + this.props.currentId);
        memberRef.on('value', (snapshot) => {
            let member = snapshot.val();
            let contactInfo = member.contact_info;
            let emergencyContact = member.emergency_contact;
            let latestCheck = member.latest_check;
            this.setState({
                id: member.id, 
                first_name: member.first_name,
                last_name: member.last_name,
                street_address: contactInfo.street_address, 
                city: contactInfo.city, 
                state: contactInfo.state, 
                postal_code: contactInfo.postal_code, 
                emergency_contact_first_name: emergencyContact.first_name,
                emergency_contact_last_name: emergencyContact.last_name,
                emergency_contact_phone: contactInfo.phone,
                emergency_contact_relationship: emergencyContact.relationship,
                latest_check_type: latestCheck.type,
                latest_check_time: latestCheck.time
            });
        });
    }

    handleFirstNameChange(e){
        this.setState({first_name: e.target.value});
    }

    handleLastNameChange(e){
        this.setState({last_name: e.target.value});
    }

    handleStreetAddressChange(e){
        this.setState({street_address: e.target.value});
    }

    handleCityChange(e){
        this.setState({city: e.target.value});
    }

    handleStateChange(e){
        this.setState({state: e.target.value});
    }

    handlePostalCodeChange(e) {
        this.setState({postal_code: e.target.value});
    }

    handleEmergencyFirstNameChange(e){
        this.setState({emergency_contact_first_name: e.target.value});
    }

    handleEmergencyLastNameChange(e){
        this.setState({emergency_contact_last_name: e.target.value});
    }

    handleEmergencyRelationshipChange(e){
        this.setState({emergency_contact_relationship: e.target.value});
    }

    handleEmergencyPhoneChange(e){
        this.setState({emergency_contact_phone: e.target.value});
    }

    handleLatestCheckTypeChange(e){
        this.setState({latest_check_type: e.target.value});
    }

    handleLatestCheckTimeChange(e){
        this.setState({latest_check_time: e.target.value});
    }

    handleSave() {
        // update names 
        firebase.database().ref('daycare/' + this.state.id).update({
            first_name: this.state.first_name, 
            last_name: this.state.last_name
        });

        // update contact info
        firebase.database().ref('daycare/' + this.state.id + '/contact_info').update({
            street_address: this.state.street_address,
            city: this.state.city,
            state: this.state.state,
            postal_code: this.state.postal_code,
            phone: this.state.emergency_contact_phone
        });

        // update emergency contact info
        firebase.database().ref('daycare/' + this.state.id + '/emergency_contact').update({
            first_name: this.state.emergency_contact_first_name,
            last_name: this.state.emergency_contact_last_name,
            relationship: this.state.emergency_contact_relationship
        });

        // update latest check
        firebase.database().ref('daycare/' + this.state.id + '/latest_check').update({
            type: this.state.latest_check_type,
            time: this.state.latest_check_time
        });

        // Go back
        this.props.backClickHandler();
    }

    render() {
        return(
            <div className="Modify-form">
            <Row>
                <h4>Information</h4>
                <Input s={12} label="ID" defaultValue={this.state.id} disabled />
                <Input s={6} label="First Name" defaultValue={this.state.first_name} onChange={this.handleFirstNameChange.bind(this)}/>
                <Input s={6} label="Last Name" defaultValue={this.state.last_name} onChange={this.handleLastNameChange.bind(this)}/>
                <Input s={12} label="Street Address" defaultValue={this.state.street_address} onChange={this.handleStreetAddressChange.bind(this)}/>
                <Input s={6} label="City" defaultValue={this.state.city} onChange={this.handleCityChange.bind(this)}/>
                <Input s={3} label="State" defaultValue={this.state.state} onChange={this.handleStateChange.bind(this)}/>
                <Input s={3} label="Postal Code" defaultValue={this.state.postal_code} onChange={this.handlePostalCodeChange.bind(this)}/>
            </Row>
            <Row>
                <h4>Emergency Contact</h4>
                <Input s={6} label="Emergency Contact First Name" defaultValue={this.state.emergency_contact_first_name} onChange={this.handleEmergencyFirstNameChange.bind(this)}/>
                <Input s={6} label="Emergency Contact Last Name" defaultValue={this.state.emergency_contact_last_name} onChange={this.handleEmergencyLastNameChange.bind(this)}/>
                <Input s={6} label="Emergency Contact Phone" defaultValue={this.state.emergency_contact_phone} onChange={this.handleEmergencyPhoneChange.bind(this)}/>
                <Input s={6} label="Emergency Contact Relationship" defaultValue={this.state.emergency_contact_relationship} onChange={this.handleEmergencyRelationshipChange.bind(this)}/>
            </Row>
            <Row>
                <h4>Last Check In / Out</h4>
                <Input s={6} label="Check In or Out" type='select' defaultValue={this.state.latest_check_type} onChange={this.handleLatestCheckTypeChange.bind(this)}>
                    <option value='in'>Check In</option>
                    <option value='out'>Check Out</option>
                </Input>
                <Input s={6} label="Time" defaultValue={this.state.latest_check_time} onChange={this.handleLatestCheckTimeChange.bind(this)}/>
            </Row>
            <Button className='red lighten-2' waves='light' onClick={this.props.backClickHandler}>Back</Button>  <Button waves='light' onClick={this.handleSave.bind(this)}>Save</Button>
            </div>
        );
    }
}

export default ModifyForm;