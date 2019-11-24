import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../actions/securityActions";
import {Navbar,  Nav, NavItem, NavDropdown} from 'react-bootstrap'


class Header extends Component {
    logout() {
        this.props.logout();
        window.location.href = "/";
    }



    render() {
        const {validToken, user} = this.props.security;
        console.log(user);

        const userIsAuthenticated = (
            <div>
                {/** <div className="collapse navbar-collapse" id="mobile-nav">

                 <ul className="navbar-nav ml-auto">

                 <li className="nav-item">
                 <Link to={`/ResumeBoard/${user.id}`}>
                 <i className="fas fa-user-circle mr-1"/>
                 <h6>{user.fullName}</h6>
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

                 </div>**/}
                <Nav>
                    <Nav.Link href={`/ResumeBoard/${user.id}`}>
                        <i className="fas fa-user-circle mr-1"> {user.fullName}</i>

                    </Nav.Link>

                    <Nav.Link  href="/"
                               onClick={this.logout.bind(this)}>
                        Logout
                    </Nav.Link>
                </Nav>

    </div>
        );


        const isNotadmin = (
            <div></div>
        );

        const isadmin = (

            <div>
                {/** <li className="nav-item">
                 <Dropdown>
                 <Dropdown.Toggle variant="success" id="dropdown-basic">
                 Menu
                 </Dropdown.Toggle>

                 <Dropdown.Menu>
                 <Dropdown.Item href="/AdminComponenet"> Search for employees</Dropdown.Item>
                 <Dropdown.Item href="/EditFrontEdgeAddressPage">Edit company information</Dropdown.Item>
                 </Dropdown.Menu>
                 </Dropdown>
                 </li>**/}
                <NavDropdown title="Admin menu" id="collasible-nav-dropdown" className="btn-primary">
                    <NavDropdown.Item href="/AdminComponenet"> Search for employees</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/EditFrontEdgeAddressPage">Edit company information</NavDropdown.Item>
                </NavDropdown>
            </div>

        );
        let Admin;

        if (user.adminOrUser === true) {
            Admin = isadmin;

        } else {
            Admin = isNotadmin;
        }


        const userIsNotAuthenticated = (
            <div>
            {/** <div className="collapse navbar-collapse" id="mobile-nav">
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
                 </div>**/}
                <Nav>
                <Nav.Link href="/">login</Nav.Link>

                <Nav.Link  href="/Register">
                    Register
                </Nav.Link>
                </Nav>
              </div>

        );

        let headerLinks;

        if (validToken && user) {
            headerLinks = userIsAuthenticated;
        } else {
            headerLinks = userIsNotAuthenticated;
        }


        return (
            <div>
                {/**
                 <nav className="navbar navbar-expand-xl navbar-dark bg-dark mb-4">
                 <div className="container">
                 <ul>
                 <li className="logo">Resume<span>Generator</span></li>
                 <li className="navbarwelcome"><h2>FrontEdge<span>IT</span></h2></li>
                 </ul>


                 <div className="collapse navbar-collapse" id="mobile-nav">


                 <ul className="navbar-nav ml-auto">

                 {Admin}

                 </ul>

                 </div>
                 </div>
                 </nav>**/}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Resume generator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {Admin}

                        </Nav>

                            {headerLinks}

                    </Navbar.Collapse>
                </Navbar>

            </div>
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
    {logout}
)(Header)
