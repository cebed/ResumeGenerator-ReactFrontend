import React, {Component} from 'react';
import LandingPage from "./components/layout/LandingPage";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import {ButtonToolbar, Button} from 'react-bootstrap';
import Bootstap from 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/UserManagement/Signup";
import Register from "./components/UserManagement/Register";


//THIS IMPORT ALLOWS US TO HOOK UP REACT WITH REDUX
//Provider is basically how we define the store that we are going to use for our APP
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
            <div className="App">

                {
                    //Public Routes
                }
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Register" component={Register}/>

                {
                    //Private Routes
                }


            </div>
            </Router>
            </Provider>
        );
    }
}

export default App;
