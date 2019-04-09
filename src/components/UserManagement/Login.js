import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
//import PropTypes from "prop-types"
import { connect } from "react-redux";
//import classnames from "classnames";
import { login } from "../../actions/securityActions";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const LoginRequest = {
            username: this.state.username,
            password: this.state.password
        };

        this.props.login(LoginRequest);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Form className="logier">
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control  placeholder="Email"
                                       type="text"
                                       name ="username"
                                       value={this.state.username}
                                       onChange={this.onChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Password"
                                      name="password"
                                      value={this.state.password}
                                      onChange={this.onChange}
                        />
                    </Form.Group>


                    <Button className="login" type="submit">
                        Login
                    </Button>

                </Form>
                </form>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { login } )(Login);
