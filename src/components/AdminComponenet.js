import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fechUsers} from "../actions/userActions";
import { Link } from 'react-router-dom';
import _ from "lodash";
import CourseComponent from "./CourseComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardDeck from "react-bootstrap/CardDeck";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class adminComponenet extends Component {

    componentDidMount(){
        this.props.fechUsers();

    }

    renderUsers(){
        return _.map(this.props.user.user, list => {
            return(
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="paddingCard">


                <Card className="text-center" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={list.image}  alt="Upload Image" />
                    <Card.Body>
                        <Card.Title>{list.fullName}</Card.Title>

                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{list.username}</ListGroupItem>

                    </ListGroup>
                    <Card.Body>
                        <Button href={`/ResumeBoard/${list.id}`}>

                            View CV

                        </Button>

                    </Card.Body>
                </Card>

                    </div>
                    </div></div>









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
