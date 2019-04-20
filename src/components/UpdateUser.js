import React, {Component} from 'react';

//import {createNewUser} from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import classnames from "classnames";
import Button from "react-bootstrap/Button";
import {UppdateUser} from "../actions/securityActions";


class UpdateUser extends Component {

    constructor(props){
        super();
        this.state = {
            currentTitle: props.security.user.currentTitle,
            fullName: props.security.user.fullName,
            username: props.security.user.username,
            address: props.security.user.address,
            phone:props.security.user.phone,
            userProfile: props.security.user.userProfile

           // errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event){
        event.preventDefault();
        const updateCurrentUser = {
            currentTitle: this.state.currentTitle,
            fullName: this.state.fullName,
            username: this.state.username,
            address: this.state.address,
            phone: this.state.phone,
            userProfile: this.state.userProfile

        };
        const {id} =   this.props.security.user;

        this.props.UppdateUser(updateCurrentUser, this.props.history, id);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        const { user } = this.props.security;
        return (
            <register>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card border-dark mb-3">
                                    <div className="card-header"><h1 className="display-4 text-center">Update Information</h1></div>
                                    <div className="card-body">

                                        <p className="lead text-center">User details</p>

                                        <form onSubmit={this.onSubmit}>


                                            <div className="form-group">

                                                <input type="text"
                                                       placeholder="My title"
                                                       name="currentTitle"
                                                       value={this.state.currentTitle}
                                                       onChange={this.onChange}
                                                />

                                            </div>

                                            <div className="form-group">
                                                <input type="text"
                                                       placeholder="Full Name"
                                                       name="fullName"
                                                       value={this.state.fullName}
                                                       onChange={this.onChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input type="text"
                                                       placeholder="Email Address"
                                                       name="username"
                                                       value={this.state.username}
                                                       onChange={this.onChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <input type="text"
                                                       placeholder="Address"
                                                       name="address"
                                                       value={this.state.address}
                                                       onChange={this.onChange}
                                                />

                                            </div>


                                            <div className="form-group">
                                                <input type="text"

                                                       placeholder="Phone"
                                                       name="phone"
                                                       value={this.state.phone}
                                                       onChange={this.onChange}
                                                />

                                            </div>

                                            <div className="form-group">
                                                <textarea className="form-control" rows="5" id="comment"

                                                       placeholder="userProfile"
                                                       name="userProfile"
                                                       value={this.state.userProfile}
                                                       onChange={this.onChange}
                                                />
                                            </div>



                                            <div>
                                                <Button type="submit" variant="primary" size="lg" block>
                                                   Update
                                                </Button>

                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </register>
        );
    }
}

UpdateUser.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});


export default connect(
    mapStateToProps,
    { UppdateUser}
)(UpdateUser);