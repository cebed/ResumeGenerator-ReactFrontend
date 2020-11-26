import React, {Component} from 'react';
import {createNewUser} from "../actions/securityActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import Button from "react-bootstrap/Button";


class Registration extends Component {

    constructor() {
        super();

        this.state = {

            fullName: '',
            username: '',
            password: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        if (this.props.security.validToken) {

            this.props.history.push("/");

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(event) {
        event.preventDefault();
        const newuser = {
            fullName: this.state.fullName,
            username: this.state.username,
            password: this.state.password

        };

        this.props.createNewUser(newuser, this.props.history);

    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const {errors} = this.state;
        return (
            <register>
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card border-dark mb-3">
                                    <div className="card-header">
                                        <h1 className="display-4 text-center">Sign Up</h1>
                                    </div>
                                    <div className="card-body">

                                        <p className="lead text-center">Create your Account</p>
                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <input type="text"
                                                       className={classnames("form-control form-control-lg", {
                                                           "is-invalid": errors.fullName
                                                       })}
                                                       placeholder="Full Name"
                                                       name="fullName"
                                                       required
                                                       value={this.state.fullName}
                                                       onChange={this.onChange}
                                                />
                                                {errors.fullName && (
                                                    <div className="invalid-feedback">{errors.fullName}</div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <input type="text"
                                                       className={classnames("form-control form-control-lg", {
                                                           "is-invalid": errors.username
                                                       })}
                                                       required
                                                       placeholder="Email Address"
                                                       name="username"
                                                       value={this.state.username}
                                                       onChange={this.onChange}

                                                />
                                                {errors.username && (
                                                    <div className="invalid-feedback">{errors.username}</div>
                                                )}

                                            </div>
                                            <div className="form-group">
                                                <input type="password"
                                                       className={classnames("form-control form-control-lg", {
                                                           "is-invalid": errors.password
                                                       })}
                                                       required
                                                       placeholder="Password"
                                                       name="password"
                                                       value={this.state.password}
                                                       onChange={this.onChange}

                                                />
                                                {errors.password && (
                                                    <div className="invalid-feedback">{errors.password}</div>
                                                )}
                                            </div>
                                            <div>
                                                <Button type="submit" variant="primary" size="lg" block>
                                                    Join now
                                                </Button>

                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div Style="height:300px"></div>
                </div>

            </register>
        );
    }
}

Registration.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});
export default connect(
    mapStateToProps,
    {createNewUser}
)(Registration);
