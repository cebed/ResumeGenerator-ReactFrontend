import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserBoard from "./UserBoard";

class ResumeBoard extends Component {
    render() {

        return (
            <div>


                <div>
                <UserBoard/>
                </div>


            </div>
        );
    }
}

ResumeBoard.propTypes = {
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(ResumeBoard)