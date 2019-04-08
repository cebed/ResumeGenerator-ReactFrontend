import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import LandingPage from "./components/layout/LandingPage";
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {ButtonToolbar, Button} from 'react-bootstrap';
import Bootstap from 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/layout/header";
import Signup from "./components/Signup";


class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">

                <Route exact path="/" component={Header} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Signup" component={Signup} />
            </div>
            </Router>
        );
    }
}

export default App;
