import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import Bootstap from 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../actions/securityActions";


class Header extends Component {
    logout() {
        this.props.logout();
        window.location.href = "/";
    }
    render() {
        const { validToken, user } = this.props.security;

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <i className="fas fa-user-circle mr-1" />
                            {user.fullName}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/logout"
                            onClick={this.logout.bind(this)}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );


        const userIsNotAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item">
                        <Link className="nav-link" to="/Register">
                            Sign Up
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }

        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark mb-4">
                <div className="container">
                    <ul>
                        <li className="logo">Resume<span>Generator</span></li>
                        <Link className="navbar-brand" to="/"><h2 className="navbarwelcome">Welcome</h2> </Link>
                    </ul>


                    <div className="collapse navbar-collapse" id="mobile-nav">


                        <ul className="navbar-nav ml-auto">
                            {headerLinks}


                            <li className="nav-item">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Menu
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/Register">Sign up</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps,
    { logout }
)(Header)