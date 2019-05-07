import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateCourse, getCourseById, deleteCourse} from "../actions/CourseActions";
import Back from "../components/Back";


class EditCoursePage extends Component {
    componentDidMount() {

        const {id} = this.props.match.params;
        this.props.getCourseById(id);


    }

    constructor() {
        super();

        this.state = {

            title: '',
            start_date: '',
            end_date: '',
            description: '',

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        const {
            title,
            start_date,
            end_date,

        } = nextProps.course;

        this.setState({
            title,
            start_date,
            end_date
        });
    }


    onSubmit(event) {
        event.preventDefault();
        const update = {
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,


        };

        const {id} = this.props.match.params;

        this.props.updateCourse(id, update, this.props.history, this.props.user.id, this.props.user.id);

    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        //const parmValue = this.props.user.id;
        this.props.deleteCourse(id, this.props.history, this.props.user.id);

    }


    render() {
        console.log(this.props.user.id);
        //const {title} = this.props.course;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header">
                                <h1 className="display-4 text-center">Edit course</h1>
                            </div>
                            <div className="card-body">



                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Title
                                            </span>
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
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Date
                                            </span>
                                        </div>
                                        <input type="date" className="form-control"
                                               placeholder="start_date"
                                               name="start_date"
                                               value={this.state.start_date}
                                               onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="saveButton" style={{margin: '5px'}}>
                                        <Button type="submit" variant="success" size="lg" block>
                                            Save
                                        </Button>
                                    </div>


                                </form>

                                <div className="container">

                                    <div className="row">
                                        <div className="col-6" style={{padding: '5px'}}>
                                            <Back/>
                                        </div>

                                        <div className="col-6" style={{padding: '5px'}}>
                                            <Button
                                                variant="outline-danger"
                                                size="lg"
                                                block
                                                onClick={this.onDeleteClick.bind(this)}
                                                type="submit">

                                                Delete
                                            </Button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

EditCoursePage.propTypes = {
    updateCourse: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    getCourseById: PropTypes.func.isRequired,


};

function mapStateToProps(state) {
    return {
        course: state.courses.courses,
        user: state.user.user
    };
}


export default connect(
    mapStateToProps,
    {updateCourse, getCourseById, deleteCourse}
)(EditCoursePage);

