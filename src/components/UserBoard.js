import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {generatePdf} from "../actions/securityActions";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import LinkedInPage from "./LinkedInPage";

class UserBoard extends Component {


    onGeneratePdf() {
        const {user} = this.props.user;

        this.props.generatePdf(user.id);
        console.log(user.id);
    }

    render() {


        const {user} = this.props.user;


        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">

                    <div className="card-header">
                        <h4 className="display-4 text-center">Welcome {user.fullName}

                            <div>
                                <Button className="pdfButton"
                                        onClick={this.onGeneratePdf.bind(this)}
                                        type="submit" variant="primary" size="lg"
                                >
                                    Download CV PDF
                                </Button>
                            </div>

                        </h4>
                        {/**<LinkedInPage/>**/}

                    </div>

                    <div className="row">

                        <div className="card card-body bg-light mb-3">
                            <div className="col-8">
                                <div className="row">Name: {user.fullName}</div>
                                <div className="row"> Email : {user.username}</div>
                                <div className="row"> Address: {user.address}</div>
                                <div className="row"> Phone: {user.phone}</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card card-body bg-light mb-3" align="center">
                                <img src={user.image} alt="uploadImage" className="uploadImage"/>
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


                    <Link className="fa fa-edit pr-1" to={`/updateUser/${user.id}`}>
                        Update Info

                    </Link>


                </div>

            </div>

        );

    }


}

const mapStateToProps = state => ({
    // security: state.security
    user: state.user

});
UserBoard.propTypes = {

    errors: PropTypes.object.isRequired
};
export default connect(
    mapStateToProps, {generatePdf}
)(UserBoard)
