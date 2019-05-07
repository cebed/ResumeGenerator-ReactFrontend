import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserBoard from "../components/UserBoard";
import ExperienceContainer from "../container/ExperienceContainer";
import CourseContainer from "../container/CourseContainer";
import EducationContainer from "../container/EducationContainer";
import SkillsContainer from "../container/SkillsContainer";
import OthersContainer from "../container/OthersContainer";
import LanguageContainer from "../container/LanguageContainer";
import {getUsersById} from "../actions/userActions";

class ResumePage extends Component {
    componentDidMount() {
        this.props.getUsersById(this.props.match.params.id);

    }

    render() {

        return (
            <div>


                <div>

                    <UserBoard/>
                    <ExperienceContainer/>
                    <EducationContainer/>
                    <CourseContainer/>
                    <OthersContainer/>
                    <SkillsContainer/>
                    <LanguageContainer/>

                </div>


            </div>
        );
    }
}

ResumePage.propTypes = {
    //security: PropTypes.object.isRequired
    getUsersById: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    // security: state.security
    user: state.user.user
});

export default connect(
    mapStateToProps, {getUsersById}
)(ResumePage)

