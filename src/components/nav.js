import React, { Component } from 'react';
import {Dropdown,DropdownButton} from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
        <li className="logo">Resume<span>Generator</span></li>
      </ul>
      <ul>
          <li><a href="#">Home</a></li>
          <li><h2>Welcome</h2></li>

          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Menu
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>;

      </ul>
      </nav>
    );
  }
}

export default Nav;
