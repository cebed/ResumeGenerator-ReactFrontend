import React, {Component} from 'react';
import Header from "./components/header";
//import Main from "./components/main";
import Footer from "./components/footer";
//import logo from './logo.svg';
import './App.css';
//import {ButtonToolbar, Button} from 'react-bootstrap';
//import Bootstap from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (

            <div className="App">


                <Header />
                <Footer />

            </div>
        );
    }
}

export default App;
