import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import Nav from "./nav";
import axios from 'axios';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmittRegister= this.handleSubmittRegister.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value, Person: []},
            );
    }

    handleSubmittRegister(event) {

        event.preventDefault();
        const {value} = this.state
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };


        axios.post(`http://127.0.0.1:5004/register`,  value, config )
        //axios.post(`http://127.0.0.1:5004/register`, value )
             .then((response) =>{
                 if(response.status === 200){
                     alert('Registred as: ' + value );
                 }
             });
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5004/all` )
            .then(res=> {
                console.log(res)
                if(res.status === 200){
                   /* alert('A name was submitted: failed' );*/
                }
                this.setState({Person: res.data})
            })


    }


    render() {
      const {value} = this.state
    return (
     
      <header>
            <Nav/>
        <div className="head">

            <div>
            <h1>Front<span className="last-word">Edge IT</span><br/> Resumes </h1>
            </div>
            <div className="parag">
              <p> Do you want to generate your resume? Or do you want to view your CV and maybe download it? <br/>Let's go!</p>

                <Form className="logier" onSubmit={this.handleSubmittRegister}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Register by email</Form.Label>
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
       
      </header>
      
    );
  }
}

export default Header;
