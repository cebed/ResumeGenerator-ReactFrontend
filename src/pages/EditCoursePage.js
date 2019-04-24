import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateCourse , getCourseById , deleteCourse} from "../actions/CourseActions";
import {Link} from "react-router-dom";


class  EditCoursePage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
            this.props.getCourseById(id);



    }
    constructor(){
        super();

        this.state = {

            title: '',
            start_date: '',
            end_date: '',
            description: '',

        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,


        };
       // console.log(this.props.match.params);
       // console.log(update);
        const {id} = this.props.match.params


        this.props.updateCourse(id, update, this.props.history, this.props.user.id , this.props.user.id );

    }







    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        const parmValue=  this.props.user.id;
        this.props.deleteCourse(id , this.props.history,this.props.user.id);

    }


    render() {





        console.log(this.props.user.id );
        const { title }  = this.props.course;

        return (
            <Card>
                {this.props.course.id}

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

                        <Button type="submit" variant="primary" size="lg" block>
                            Save
                        </Button>


                    </form>

                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this)}
                        type="submit" variant="primary" size="lg" block
                    >
                        Delete
                    </button>
                </Card.Body>
            </Card>

        );
    }
}
EditCoursePage.propTypes = {
    updateCourse: PropTypes.func.isRequired,
    deleteCourse: PropTypes.func.isRequired,
    getCourseById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  course: state.courses.courses  ,
        user: state.user.user};
}



export default connect(
    mapStateToProps,
    { updateCourse, getCourseById, deleteCourse }
)(EditCoursePage);

