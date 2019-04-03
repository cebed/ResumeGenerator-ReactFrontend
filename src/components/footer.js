import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";
import axios from 'axios';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmittRegister= this.handleSubmittRegister.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value, Person: []},
        );
    }

    handleSubmittRegister(event) {

        event.preventDefault();
        const {value} = this.state
        const config = {
            headers: {
                'content-type': 'multi-part/form-data'
            }
        };


        axios.post(`http://127.0.0.1:5004/login`,  value , config )
            .then((response) =>{
                if(response.status === 200){
                    alert('Logged in as : ' + response.data );
                }

            });
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:5004/all` )
            .then(res=> {
                console.log(res)
                if(res.status === 200){
                    /* alert('A name was submitted: failed' );*/
                }
                this.setState({Person: res.data})
            })


    }
  render() {
    return (
     
      <footer>
          <Form className="logier" onSubmit={this.handleSubmittRegister}>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>RLogin only by email </Form.Label>
                  <Form.Control  type="text" value={this.state.value} onChange={this.handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>


              <Button className="login" type="submit">
                  Login
              </Button>

          </Form>
          <ul>
              <li className="logo">By<span>Chalmers</span>Students</li>
          </ul>

      </footer>
      
    );
  }
}

export default Footer;
