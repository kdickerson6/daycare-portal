import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import Form from './Form.js';
import CheckInOut from './CheckInOut.js';
import Admin from './Admin.js';
import Logo from './aubdaycare.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayCheckInOut: false,
      displayAdmin: false
    }
  }

  handleEnterClick() {
    this.setState({displayCheckInOut: true});
  }

  handleAdminClick() {
    this.setState({displayAdmin:true});
  }

  render() {
    const shouldDisplayCheckInOut = this.state.displayCheckInOut;
    const shouldDisplayAdmin = this.state.displayAdmin;
    return (
      <div className="App">
        <nav>
          <Navbar className="Nav" brand='Day Care Portal' right>
            <NavItem href='#'>Home</NavItem>
            <NavItem onClick={this.handleAdminClick.bind(this)}>Admin</NavItem>
          </Navbar>
        </nav>
        {shouldDisplayAdmin ? <Admin/> : 
        (
        <div><header className="App-header">
          <img src={Logo} alt=""/>
        </header>
        <div className="Form">
          {shouldDisplayCheckInOut ? <CheckInOut /> : <Form enterClickHandler={this.handleEnterClick.bind(this)}/>}
        </div></div>
        )}
      </div>
    );
  }
}

export default App;
