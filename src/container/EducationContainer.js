import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import EducationComponent from "../components/EducationComponent";

class EducationContainer extends React.Component {


    renderWorkEx() {
        return _.map(this.props.user.educations, list => {
            return (

                <EducationComponent

                    experience={list.title}
                    start_date={list.start_date}
                    end_date={list.end_date}
                    description={list.description}
                    id={list.education_id}

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
                        <div className="card-header"><h1 className="display-4 text-center">Education</h1></div>

                        {this.renderWorkEx()}

                        <Link className="btn btn-primary" to="/AddEducationPage">
                            Add new Education
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


export default connect(mapStateToProps)(EducationContainer);
