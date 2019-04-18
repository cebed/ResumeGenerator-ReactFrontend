import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserBoard from "../components/UserBoard";
import ExperienceContainer from "../container/ExperienceContainer";
import CourseContainer from "../container/CourseContainer";
import EducationContainer from "../container/EducationContainer";

class ResumePage extends Component {
    render() {

        return (
            <div>


                <div>
                <UserBoard/>
                <ExperienceContainer/>
                <EducationContainer/>
                    <CourseContainer/>
                </div>


            </div>
        );
    }
}

ResumePage.propTypes = {
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(ResumePage)