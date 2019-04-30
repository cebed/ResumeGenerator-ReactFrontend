import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fechUsers} from "../actions/userActions";
import { Link } from 'react-router-dom';
import _ from "lodash";
import CourseComponent from "./CourseComponent";

class adminComponenet extends Component {

    componentDidMount(){
        this.props.fechUsers();

    }

    renderUsers(){
        return _.map(this.props.user.user, list => {
            return(
                <li className="list-group-item " key={list.id}>
                    <div className="container">
                        <Link to={`/ResumeBoard/${list.id}`}>
                    <div className="row">
                    <div className="col-6">


                      {list.fullName}
                    </div>
                    <div className="col-6">

                        {list.username}
                    </div>
                    </div>
                        </Link>
                    </div>



                </li>

            )
        });
    }



    render() {

        return (
            <div>

                <div className="container">
                    <div className="card card-body bg-light mb-3">
                {this.renderUsers()}
                </div>
                </div>
            </div>
        );
    }
}

adminComponenet.propTypes = {
    user: PropTypes.object.isRequired,
    fechUsers: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    //security: state.security
    user: state.user
});

export default connect(
    mapStateToProps,{fechUsers}
)(adminComponenet)