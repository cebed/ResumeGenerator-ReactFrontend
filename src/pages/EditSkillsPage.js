import React, {Component} from 'react';


import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateSkills, deleteSkills} from "../actions/SkillsActions";
import Back from "../components/Back";

//import {Link} from "react-router-dom";


class EditSkillsPage extends Component {
    componentDidMount() {

        //  const { id }  = this.props.match.params;
        //  this.props.getCourseById(id);

    }

    constructor() {
        super();

        this.state = {

            title: '',
            level: '',


        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event) {
        event.preventDefault();
        const update = {
            title: this.state.title,
            level: this.state.level,


        };
        // console.log(this.props.match.params);
        // console.log(update);
        const {id} = this.props.match.params
        this.props.updateSkills(id, update, this.props.history, this.props.user.id);

    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deleteSkills(id, this.props.history, this.props.user.id);

    }

    render() {
        const {title} = this.props.course;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit skills</h1></div>
                            <div className="card-body">
                                {this.props.course.id}


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
                                        <input type="text"

                                               placeholder="level"
                                               name="level"
                                               value={this.state.level}
                                               onChange={this.onChange}

                                        />


                                    </div>

                                    <div className="saveButton">
                                        <Button type="submit" variant="success" size="lg" block>
                                            Save
                                        </Button>
                                    </div>

                                </form>

                                <div className="container">

                                    <div className="row">
                                        <div className="col-6">
                                            <Back/>
                                        </div>

                                        <div className="col-6">
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
                EditSkillsPage.propTypes = {
                updateSkills: PropTypes.func.isRequired,
                deleteSkills: PropTypes.func.isRequired,
                //getCourseById: PropTypes.func.isRequired,


            };
                function mapStateToProps(state) {
                return {course: state.courses.courses  ,
                user: state.user.user};
            }


                export default connect(
                mapStateToProps,
                {updateSkills,  deleteSkills}
                )(EditSkillsPage);

