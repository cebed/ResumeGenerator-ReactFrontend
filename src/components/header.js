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
        console.log(user);

        const userIsAuthenticated = (
            <div className="collapse navbar-collapse" id="mobile-nav">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <i className="fas fa-user-circle mr-1" />
                        <h6>{user.fullName}</h6>

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


        const isNotadmin=(
            <div> </div>
        );

        const isadmin=(

            <div>

        <li className="nav-item">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/AdminComponenet"> Search for employees</Dropdown.Item>
                    <Dropdown.Item href="/EditFrontEdgeAddressPage">Edit Company information</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </li>
            </div>

        );
        let Admin;

        if ( user.adminOrUser == true) {
            Admin = isadmin;
        } else {
            Admin = isNotadmin;
        }


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
                        <li className="navbarwelcome"><h2>FrontEdge<span>IT</span></h2></li>
                    </ul>


                    <div className="collapse navbar-collapse" id="mobile-nav">


                        <ul className="navbar-nav ml-auto">
                            {headerLinks}
                            {Admin}

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