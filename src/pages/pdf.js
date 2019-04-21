import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserBoard from "../components/UserBoard";
import ExperienceContainer from "../container/ExperienceContainer";
import CourseContainer from "../container/CourseContainer";
import EducationContainer from "../container/EducationContainer";

class pdf extends Component {

    componentDidMount() {


      //this.props.security.



    }
    render() {

        return (
            <div>




            </div>
        );
    }
}

pdf.propTypes = {
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(pdf)