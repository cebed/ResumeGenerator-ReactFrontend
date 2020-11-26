import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewCourse} from "../actions/CourseActions";
import Back from "../components/Back";


class AddCoursePage extends Component {
    constructor() {
        super();

        this.state = {

            title: '',
            start_date: '',
            id: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        const newCourse = {
            title: this.state.title,
            start_date: this.state.start_date,
            id: this.props.user.id,

        };
        console.log(this.props.user.id);
        this.props.createNewCourse(newCourse, this.props.user.id, this.props.history);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header">
                                <h1 className="display-4 text-center">Add Course</h1>
                            </div>

                            <div className="card-body">
                                <h1>
                                    {this.state.id}
                                </h1>


                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Title</span>
                                        </div>

                                        <input type="text" className="form-control"
                                               placeholder=" title"
                                               name="title"
                                               value={this.state.title}
                                               onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="" style={{width: '90px'}}>Date</span>
                                        </div>

                                        <input type="date" className="form-control"
                                               placeholder="start_date"
                                               name="start_date"
                                               value={this.state.start_date}
                                               onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="paddbetweensection" style={{margin: '5px'}}>

                                        <div className="col-16">
                                            <Button type="submit" variant="success" size="lg" block>
                                                Save
                                            </Button>
                                        </div>
                                    </div>


                                </form>
                                <div className="col-16" style={{margin: '5px'}}>
                                    <Back/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div Style="height:300px"></div>
            </div>

        );
    }
}

AddCoursePage.propTypes = {
    createNewCourse: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.user.user,

});


export default connect(
    mapStateToProps,
    {createNewCourse}
)(AddCoursePage);

