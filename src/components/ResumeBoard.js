import React, {Component} from 'react';
import Header from "./layout/header";
import Footer from "./layout/footer";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../actions/securityActions";
import UserBoard from "./UserBoard";

class ResumeBoard extends Component {
    render() {
        const { validToken, user } = this.props.security;
        return (
            <div>


                <div>
                <UserBoard/>
                </div>

           <div>
                <Footer/>
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