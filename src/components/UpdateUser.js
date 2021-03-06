import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import {UppdateUser} from "../actions/securityActions";
import {getUsersById} from "../actions/userActions";
import Back from "./Back";


class UpdateUser extends Component {
    componentDidMount() {
        this.props.getUsersById(this.props.match.params.id);
    }

    constructor() {
        super();
        this.state = {
            currentTitle: '',
            fullName: '',
            username: '',
            address: '',
            phone: '',
            image: '',
            userProfile: '',
            password: ''

            // errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        const {
            currentTitle,
            fullName,
            username,
            address,
            phone,
            image,
            userProfile,
            password

        } = nextProps.user;

        this.setState({
            currentTitle,
            fullName,
            username,
            address,
            phone,
            image,
            userProfile,
            password
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const updateCurrentUser = {
            currentTitle: this.state.currentTitle,
            fullName: this.state.fullName,
            username: this.state.username,
            address: this.state.address,
            phone: this.state.phone,
            image: this.state.image,
            userProfile: this.state.userProfile,
            password: this.state.password
        };
        const {id} = this.props.user;
        console.log(id);


        this.props.UppdateUser(updateCurrentUser, this.props.history, id, this.props.user.id);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {

        return (
            <register>
                {this.state.currentTitle}
                <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <div className="card border-dark mb-3">
                                    <div className="card-header"><h1 className="display-4 text-center">Update
                                        Information</h1></div>
                                    <div className="card-body">

                                        <p className="lead text-center">User details</p>

                                        <form onSubmit={this.onSubmit}>


                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" style={{width: '90px'}}
                                                          id="">Title</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="My title"
                                                       name="currentTitle"
                                                       value={this.state.currentTitle}
                                                       onChange={this.onChange}
                                                />

                                            </div>


                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Name</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Full Name"
                                                       name="fullName"
                                                       value={this.state.fullName}
                                                       onChange={this.onChange}
                                                />

                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Email</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Email Address"
                                                       name="username"
                                                       value={this.state.username}
                                                       disabled="true"
                                                       onChange={this.onChange}
                                                />

                                            </div>


                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Address</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Address"
                                                       name="address"
                                                       value={this.state.address}
                                                       onChange={this.onChange}
                                                />

                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Phone</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Phone"
                                                       name="phone"
                                                       value={this.state.phone}
                                                       onChange={this.onChange}
                                                />
                                            </div>


                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Image</span>
                                                </div>
                                                <input type="text" className="form-control"
                                                       placeholder="Image url"
                                                       name="image"
                                                       value={this.state.image}
                                                       onChange={this.onChange}
                                                />
                                            </div>

                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id=""
                                                          style={{width: '90px'}}>Password</span>
                                                </div>
                                                <input type="password" className="form-control"
                                                       placeholder="password"
                                                       name="password"
                                                       value={this.state.password}
                                                       onChange={this.onChange}
                                                />
                                            </div>

                                            <div style={{padding: '5px'}}>
                                                <h6>Profile</h6>
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
                                                <Button type="submit" variant="success" size="lg" block>
                                                    Save
                                                </Button>

                                                <div>
                                                    <Back/>
                                                </div>

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
    //user: state.security
    user: state.user.user
});


export default connect(
    mapStateToProps,
    {UppdateUser, getUsersById}
)(UpdateUser);
