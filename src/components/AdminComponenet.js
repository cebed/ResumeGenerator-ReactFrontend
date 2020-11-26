import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fechUsers} from "../actions/userActions";
import _ from "lodash";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

class adminComponenet extends Component {

    componentDidMount() {
        this.props.fechUsers();

    }

    renderUsers() {
        return _.map(this.props.user.user, list => {
            return (

                   <div className="col-md-4 ">
                        <div className="row ">


                            <Card className="" style={{width: '18rem'}}>
                                <Card.Img variant="top" src={list.image} alt="Upload Image"/>
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
                 </div>


            )
        });
    }


    render() {

        return (
            <div>

                <div className="container ">
                    <div Style="height:100px"></div>
                    <h3 >  Search for employees</h3>
                    <div Style="height:200px"></div>
                    <div className="row  ">

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
    mapStateToProps, {fechUsers}
)(adminComponenet)
