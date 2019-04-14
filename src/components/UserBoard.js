import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class UserBoard extends Component {
    render() {
        const { user } = this.props.security;
        return (

                <div className="container">
                    <div className="card card-body bg-light mb-3">

                        <form>
                            <div className="form-group row">
                                <label  className="col-sm-3 col-form-label">Username: {user.fullName}</label>

                            </div>
                            <div className="form-group row">
                                <label  className="col-sm-3 col-form-label">Email: {user.username}</label>

                            </div>

                            <div className="form-group row">
                                <label  className="col-sm-3 col-form-label">Address: {user.address}</label>

                            </div>

                            <div className="form-group row">
                                <label  className="col-sm-3 col-form-label">Phone: {user.phone}</label>

                            </div>

                        </form>


                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">

                                <li className="list-group-item update">
                                    <Link to="/updateUser">
                                    <i className="fa fa-edit pr-1"> Update Info</i>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

        );
    }
}

const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(UserBoard)
