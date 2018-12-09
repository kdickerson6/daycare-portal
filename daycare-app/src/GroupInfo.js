import React, { Component } from 'react'; 
import { Button } from 'react-materialize';
import firebase from './firebase.js'; 

class GroupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '', 
            type: '',
            classrooms: []
        };
    }

    componentDidMount() {
        this.setState({id: this.props.id});
        console.log('id' + this.props.id);
        const memberRef = firebase.database().ref('daycare/groups/' + this.props.id);
        memberRef.on('value', (snapshot) => {
            let member = snapshot.val();
            let groupType = member.type;
            let classrooms = member.classrooms;
            let newClassrooms = [];
            for(let classroom in classrooms) {
                newClassrooms.push({
                    id: classrooms[classroom].id, 
                    capacity: classrooms[classroom].capacity,
                    roomNumber: classrooms[classroom].room_number
                })
            }
            this.setState({type: groupType, classrooms: newClassrooms});
        });
    }

    backClickHandler() {
        this.props.backClickHandler();
    }

    render() {
        return(
            <div>
                <h4>Information</h4>
                <h5>Group {this.state.id}</h5>
                <h5>Type: {this.state.type}</h5>
                {this.state.classrooms.map((classroom) => {
                    return(
                        <div>
                        <h5><b>Classroom {classroom.id}</b></h5>
                        <h5>Capacity: {classroom.capacity}</h5>
                        <h5>Room Number: {classroom.roomNumber}</h5>
                        </div>
                    );
                })}
                <Button waves='light' onClick={this.backClickHandler.bind(this)}>Back</Button>
            </div>
        );
    }
}

export default GroupInfo; 