import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewEx} from "../actions/WorkExActions";


class  AddExperience extends Component {
    constructor(){
        super();

        this.state = {

            title: '',
            start_date: '',
            end_date: '',
            description: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event){
        event.preventDefault();
        const newuser = {
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description

        };

        this.props.createNewEx(newuser, this.props.history);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <Card>

                <Card.Body>

           <form onSubmit={this.onSubmit}>
               <div className="form-group">
                   <input type="text"

                          placeholder=" title"
                          name="title"

                          value={this.state.title}
                          onChange={this.onChange}
                   />

               </div>

               <div className="form-group">
                   <input type="date"

                          placeholder="start_date"
                          name="start_date"
                          value={this.state.start_date}
                          onChange={this.onChange}

                   />


               </div>
               <div className="form-group">
                   <input type="date"

                          placeholder="end_date"
                          name="end_date"
                          value={this.state.end_date}
                          onChange={this.onChange}

                   />

                   <div >
                       <textarea type="text"

                              placeholder=" description"
                              name="description"

                              value={this.state.description}
                              onChange={this.onChange}
                       />

                   </div>

               </div>
               <Button type="submit" variant="primary" size="lg" block>
                   Save
               </Button>


           </form>
                </Card.Body>
            </Card>

        );
    }
}
AddExperience.propTypes = {
    createNewEx: PropTypes.func.isRequired,

};


export default connect(
    null,
    { createNewEx }
)(AddExperience);

