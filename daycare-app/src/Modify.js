import React, { Component } from 'react';
import { Table, Button } from 'react-materialize';

class Modify extends Component {
    render() {
        return(
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
                <tr>
                <td>1234</td>
                <td>Kristin Antoon</td>
                <td>Check Out</td>
                <td>12-07-2018T2:27:00</td>
                <td><Button waves='light'>Edit</Button></td>
                </tr>
                <tr>
                <td>7890</td>
                <td>Kristin Antoon</td>
                <td>Check Out</td>
                <td>12-07-2018T2:27:00</td>
                <td><Button waves='light'>Edit</Button></td>
                </tr>
            </tbody>
            </Table>
        );
    }
}

export default Modify; 