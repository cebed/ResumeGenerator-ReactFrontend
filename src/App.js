import React, {Component} from 'react';
import LandingPage from "./components/layout/LandingPage";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
//import {ButtonToolbar, Button} from 'react-bootstrap';
import userboxResume from "./components/UserManagement/userboxResume";
import Register from "./components/UserManagement/Registration";
//THIS IMPORT ALLOWS US TO HOOK UP REACT WITH REDUX
//Provider is basically how we define the store that we are going to use for our APP
import { Provider } from "react-redux";
import store from "./store";
import setJWTToken from "./securityUtils/setJWTToken";
import {SET_CURRENT_USER} from "./actions/types";
import Login from "./components/UserManagement/Login";
import {logout} from "./actions/securityActions"


//anledning till att vi sätter upp token här är för att varje gång vi refreshar sidan så vill vi alltid vara inloggade
//så länge som token existerar
//hämta token från vår localstorage, kolla om vår token finns där, om vår token finns där, then set it så vi inte förlorar inloggning
const jwtToken = localStorage.jwtToken;

if (jwtToken) {
    setJWTToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    //put it back to our state
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });

    const currentTime = Date.now() / 1000;
    //exp comes from the token when we inspect in redux devtool for expirationtime
    if (decoded_jwtToken.exp < currentTime) {
        //handle log out
        store.dispatch(logout());
        window.location.href = "/";
    }

}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
            <div className="App">

                {
                    //Public Routes
                }
                <Route exact path="/" component={Login} />
                <Route exact path="/Register" component={Register}/>
                <Route exact path="/login" component={Login} />

                {
                    //Private Routes
                    <Route exact path="/userboxResume" component={userboxResume} />
                }


            </div>
            </Router>
            </Provider>
        );
    }
}

export default App;
