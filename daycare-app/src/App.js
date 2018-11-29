import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';
import Form from './Form.js';
import Logo from './aubdaycare.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar className="Nav" brand='Day Care Portal' right>
            <NavItem href='#'>Home</NavItem>
            <NavItem href='#'>Admin</NavItem>
          </Navbar>
        </nav>
        <header className="App-header">
          <img className="asf" src={Logo} alt=""/>
        </header>
        <div className="Form">
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
