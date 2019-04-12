import React, {Component} from 'react';

import Form from 'react-bootstrap/Form';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class  AddExperience extends Component {
    render() {

        return (
            <Card>

                <Card.Body>

           <form>
               <Form.Group controlId="title">
                   <Form.Label>Title</Form.Label>
                   <Form.Control type="text" />
               </Form.Group>

               <Form.Group controlId="start_date">
                   <Form.Label>Start date</Form.Label>
                   <Form.Control type="date"/>
               </Form.Group>
               <Form.Group controlId="end_date">
                   <Form.Label>End date</Form.Label>
                   <Form.Control type="date"/>
                   <Form.Group controlId="city">
                       <Form.Label>City</Form.Label>
                       <Form.Control type="city" />
                   </Form.Group>
                   <Form.Group controlId="description">
                       <Form.Label>Description</Form.Label>
                       <Form.Control type="text" as="textarea" rows="3" />
                   </Form.Group>
                   <Form.Group controlId="description">
                       <Form.Label>Skills</Form.Label>
                       <Form.Control type="text"  />
                   </Form.Group>

               </Form.Group>

               <Button type="submit" variant="primary" size="lg" block>
                   Save
               </Button>


           </form>
                </Card.Body>
            </Card>

        );
    }
}
export default AddExperience;

