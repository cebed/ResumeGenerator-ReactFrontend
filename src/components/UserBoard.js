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

        this.props.generatePdf();

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


                            <form>

                                <ul className="list-group">
                                    <li className="list-group-item align-items-center">
                                        <p><h6>Title:</h6> {user.currentTitle}</p>
                                    </li>

                                    <li className="list-group-item align-items-center">
                                        <p><h6>Username:</h6> {user.fullName}</p>
                                    </li>

                                    <li className="list-group-item align-items-center">
                                        <p><h6>Email:</h6> {user.username}</p>
                                    </li>

                                    <li className="list-group-item align-items-center">
                                        <p><h6>Address:</h6> {user.address}</p>
                                    </li>

                                    <li className="list-group-item align-items-center">
                                        <p><h6>Phone:</h6> {user.phone}</p>
                                    </li>

                                    <li className="list-group-item align-items-center">
                                        <p><h6>Description:</h6> {user.userProfile}</p>
                                    </li>

                                    <div className="paddingUpdateInfoLink">
                                    <Link className="fa fa-edit pr-1"  to="/updateUser">
                                        <h3>Update Info</h3>
                                    </Link>
                                    </div>

                                </ul>

                        </form>

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
