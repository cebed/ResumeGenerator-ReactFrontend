import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import Bootstap from 'bootstrap/dist/css/bootstrap.min.css';


class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark mb-4">
                <div className="container">
                    <ul>
                        <li className="logo">Resume<span>Generator</span></li>
                        <Link to="/"> <h2 className="centeritem"> Welcome </h2> </Link>
                    </ul>


                    <div className="collapse navbar-collapse" id="mobile-nav">


                        <ul className="navbar-nav ml-auto">

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

export default Header;