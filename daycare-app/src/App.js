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
      displayAdmin: false,
      id:''
    }
  }

  handleEnterClick(idValue) {
    this.setState({displayCheckInOut: true, id:idValue});
  }

  handleCancelClick() {
    this.setState({displayCheckInOut: false, displayAdmin: false, id: ''});
  }

  handleAdminClick() {
    this.setState({displayAdmin:true});
  }

  handleHomeClick() {
    this.setState({displayCheckInOut: false, displayAdmin: false});
  }


  render() {
    const shouldDisplayCheckInOut = this.state.displayCheckInOut;
    const shouldDisplayAdmin = this.state.displayAdmin;
    var id = '';
    return (
      <div>
        <nav>
          <Navbar className="Nav" brand='Day Care Portal' href='https://kdickerson6.github.io/daycare-portal' right>
            <NavItem onClick={this.handleHomeClick.bind(this)}>Home</NavItem>
            <NavItem onClick={this.handleAdminClick.bind(this)}>Admin</NavItem>
          </Navbar>
        </nav>
        {shouldDisplayAdmin ? <Admin/> : 
        (<div>
          <header className="App-header">
            <img src={Logo} alt=""/>
          </header>
          <div className="App">{shouldDisplayCheckInOut ? <CheckInOut currentId={this.state.id} cancelClickHandler={this.handleCancelClick.bind(this)}/> : <Form enterClickHandler={this.handleEnterClick.bind(this)}/>}</div>
        </div>)
        }
      </div>
    );
  }
}

export default App;
