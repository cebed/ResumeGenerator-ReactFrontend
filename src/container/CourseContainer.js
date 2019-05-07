import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import CourseComponent from "../components/CourseComponent";

class CourseContainer extends React.Component {


    renderWorkEx() {
        return _.map(this.props.user.courses, list => {
            return (

                <CourseComponent

                    experience={list.title}

                    start_date={list.start_date}

                    id={list.coursesId}

                />
            )
        });
    }

    render() {

        //const {id} = this.props.user;
        return (
            <div>
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header"><h1 className="display-4 text-center">Courses</h1></div>

                        {this.renderWorkEx()}

                        <Link className="btn btn-primary" to="/AddCoursePage">
                            Add new Courses
                        </Link>
                    </div>
                </div>
            </div>

        );
    };
}

function mapStateToProps(state) {
    return {
        course: state.courses.courses,
        user: state.user.user
    };
}


export default connect(mapStateToProps)(CourseContainer);
