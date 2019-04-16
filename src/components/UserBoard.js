import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getUsersById} from "../actions/securityActions";
import PropTypes from "prop-types";

class UserBoard extends Component {

    componentDidMount(){
        this.props.getUsersById(this.props.security.user.id);
    }

    render() {


        const { user } = this.props.security;
        return (

                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header"><h1 className="display-4 text-center">Welcome  {user.fullName} </h1></div>

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



                                    <Link className="fa fa-edit pr-1"  to="/updateUser">
                                        Update Info
                                    </Link>



                        </div>
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
    mapStateToProps,  { getUsersById}
)(UserBoard)
