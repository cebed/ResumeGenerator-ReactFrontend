import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getUsersById , generatePdf} from "../actions/securityActions";
import PropTypes from "prop-types";
import {Card} from "react-bootstrap";

class UserBoard extends Component {

    componentDidMount(){
        this.props.getUsersById(this.props.security.user.id);

    }
    onGeneratePdf(){

        this.props.generatePdf(this.props.security.user.id);

    }

    render() {


        const { user } = this.props.security;

        return (

                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header"><h4 className="display-4 text-center">Welcome  {user.fullName}

                            <button
                                className="btn btn-danger"
                                onClick={this.onGeneratePdf.bind(this)}
                                type="submit" variant="primary" size="lg" block
                            >
                                GeneratePdf
                            </button>

                        </h4></div>

                        <div className="row">
                            <div className="container">
                                <div className="card card-body bg-light mb-3">

                                    <div className="row"> Name: {user.fullName}</div>
                                    <div className="row"> Email : {user.username}</div>
                                    <div className="row"> {user.address}</div>
                                    <div className="row"> {user.phone}</div>
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="card card-body bg-light mb-3">
                                    <div className="card-header"><h4 className="display-4 text-center">About Me</h4></div>

                                    <div className="row"> Title: {user.currentTitle}</div>
                                    <div className="row"> {user.userProfile}</div>




                                </div>
                            </div>
                        </div>


                            <Link className="fa fa-edit pr-1"  to="/updateUser">
                                Update Info

                            </Link>


                    </div>

                </div>

        );
    }
}

const mapStateToProps = state => ({
    security: state.security

});
UserBoard.propTypes = {
    getUsersById: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};
export default connect(
    mapStateToProps,  { getUsersById , generatePdf}
)(UserBoard)
