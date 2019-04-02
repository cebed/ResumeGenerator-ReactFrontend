import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import Nav from "./nav";
import Loginform from "./loginform"


class Header extends Component {
  render() {
    return (
     
      <header>
            <Nav/>
        <div className="head">

            <div>
            <h1>Front<span className="last-word">Edge IT</span><br/> Resumes </h1>
            </div>
            <div className="parag">
              <p>Do you want to generate your resume? Or do you want to view your CV and maybe download it? <br/>Let's go!</p>

               <Loginform/>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
