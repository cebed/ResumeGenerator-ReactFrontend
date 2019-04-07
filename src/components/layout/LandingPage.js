import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import Nav from "../nav";
import Footer from "./footer"
import axios from 'axios';

class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        const {value} = this.state

       //axios.post(`http://127.0.0.1:5004/register`, value )
         axios.post(`http://127.0.0.1:5004/login`, value )
    }





  render() {
      const {value} = this.state
    return (
        <landingpage>


        <div className="head">

            <div>
            <h1>Front<span className="last-word">Edge IT</span><br/> Resumes </h1>
            </div>
            <div className="parag">
              <p> Do you want to generate your resume? Or do you want to view your CV and maybe download it? <br/>Let's go!</p>

                <Form className="logier" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="text" value={this.state.value} onChange={this.handleChange} />
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
        <Footer/>
        </landingpage>


      
    );
  }
}

export default LandingPage;
