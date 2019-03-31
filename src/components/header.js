import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import Nav from "./nav";


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

                <Form className="logier">
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
