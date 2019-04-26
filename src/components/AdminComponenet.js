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
                <li className="list-group-item" key={list.id}>
                    <Link to={`/ResumeBoard/${list.id}`}>
                       Name:  {list.fullName}   email : {list.username}
                    </Link>
                </li>

            )
        });
    }



    render() {

        return (
            <div>

                {this.renderUsers()}


            </div>
        );
    }
}

adminComponenet.propTypes = {
   // security: PropTypes.object.isRequired
    fechUsers: PropTypes.func.isRequired
};


const mapStateToProps = state => ({
    //security: state.security
    user: state.user
});

export default connect(
    mapStateToProps,{fechUsers}
)(adminComponenet)