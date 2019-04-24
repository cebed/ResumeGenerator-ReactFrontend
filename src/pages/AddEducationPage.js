import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewEducation} from "../actions/EducationActions";



class  AddEducationPage extends Component {
    constructor(){
        super();

        this.state = {
            description:'',
            title: '',
            start_date: '',
            id: ''
        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event){
        event.preventDefault();
        const newEducation = {
            description: this.state.description,
            title: this.state.title,
            start_date: this.state.start_date,
            id:this.props.user.id,

        };

        this.props.createNewEducation(newEducation, this.props.history, this.props.user.id);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value  } );
    }



    render() {




        return (
            <Card>
                <h1>  {this.state.id}</h1>
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
AddEducationPage.propTypes = {
    createNewEducation: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.security.user,

});


export default connect(
    mapStateToProps,
    { createNewEducation }
)(AddEducationPage);

