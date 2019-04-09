import React, {Component} from 'react';
import Footer from "../layout/footer";
import Header from "../layout/header";

import {createNewUser} from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";
import Button from "react-bootstrap/Button";


class Register extends Component {

    constructor(){
        super();

        this.state = {

            fullName: '',
            username: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event){
        event.preventDefault();
        const newuser = {
            fullName: this.state.fullName,
            username: this.state.username,
            password: this.state.password

        };

        this.props.createNewUser(newuser, this.props.history);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value });    }

    render() {
        return (
            <register>
                <Header/>
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           placeholder="Full Name"
                                           name="fullName"
                                           value={this.state.fullName}
                                           onChange={this.onChange}

                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           placeholder="Email Address"
                                           name="username"
                                           value={this.state.username}
                                           onChange={this.onChange}

                                    />

                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className="form-control form-control-lg"
                                           placeholder="Password"
                                           name="password"
                                           value={this.state.password}
                                           onChange={this.onChange}

                                    />
                                </div>
                                <div>
                                        <Button type="submit" variant="primary" size="lg" block>
                                            Join now
                                        </Button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </register>
        );
    }
}

Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   errors: state.errors
});
export default connect(
    mapStateToProps,
    { createNewUser }
    )(Register);