import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Bootstap from 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <div className="Btn1">
                        <ButtonToolbar>
                            <Button variant="primary">VI</Button>
                            <Button variant="secondary">SKAAA</Button>
                            <Button variant="success">GREJAA</Button>
                            <Button variant="danger">EXJOBB</Button>
                        </ButtonToolbar>
                    </div>




                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>


                </header>
            </div>
        );
    }
}

export default App;
