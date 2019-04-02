import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import Nav from "./nav";
import axios from 'axios';

class Header extends Component {

    /* just nu hannteras bara att registera sin email address. och det funkar inte heller, just nu skicka bara ett H som skiclas till backenden */

    handleSubmit = event => {
        event.preventDefault();





        axios.post(`http://127.0.0.1:5004/email`, "h" )

    }












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

                <Form className="logier" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>


                    <Button className="login" type="submit">
                        Login
                    </Button>

                </Form>
            </div>
        </div>
       
      </header>
      
    );
  }
}

export default Header;
