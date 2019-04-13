import React, {Component} from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../actions/securityActions";

class UserboxResume extends Component {
    render() {
        const { validToken, user } = this.props.security;
        return (
            <userboxResume>
                <Header/>
            <div className="container">
                <div className="card card-body bg-light mb-3">

                        <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Username:</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.fullName}/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-2 col-form-label">Email:</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={user.username}/>
                                </div>
                            </div>
                        </form>


                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">

                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Info</i>
                                    </li>


                            </ul>
                        </div>
                    </div>
                </div>

                <Footer/>
            </userboxResume>

        );
    }
}

UserboxResume.propTypes = {
    security: PropTypes.object.isRequired
};


const mapStateToProps = state => ({
    security: state.security
});

export default connect(
    mapStateToProps
)(UserboxResume)