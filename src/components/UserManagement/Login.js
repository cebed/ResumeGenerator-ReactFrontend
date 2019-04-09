import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import axios from "axios";

class Login extends Component {
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

        //axios.post(`http://127.0.0.1:5004/register`, value )
        axios.post(`http://127.0.0.1:5004/login`, value )
    }

    render() {
        const {value} = this.state
        return (
            <div>
                <Form className="logier" onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control  placeholder="Email"type="text" value={this.state.value} onChange={this.handleChange} />
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
        );
    }
}

export default Login;
