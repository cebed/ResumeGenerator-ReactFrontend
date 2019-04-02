import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";

class Loginform extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };

    }

    render() {
        return (
            <div>
                <Form className="logier">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" value={this.state.email} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} placeholder="Password" />
                    </Form.Group>


                    <Button className="login" type="submit">
                        Login
                    </Button>

                </Form>
            </div>
        );
    }
}

export default Loginform;