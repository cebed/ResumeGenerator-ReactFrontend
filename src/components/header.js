import React, { Component } from 'react';
import Nav from "./nav";

class Header extends Component {
  render() {
    return (
     
      <header>
      <Nav/>
        <div className="head">
            <h1>Frontedge IT< br/> Resumes </h1>
            <div className="parag">
              <p>Do you want to generate your resume? Or do you want to view your CV and maybe download it? <br/>Let's go!</p>
              <div><a className="login" href="#">Login</a></div>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
