import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWorkEx  } from '../actions/WorkExActions';
import _ from 'lodash';
import {Card} from "react-bootstrap";
//import Button from "react-bootstrap/Button";

class ExperienceContainer extends React.Component {
    // vi förvättar oss att få några posts om vi inte har i början når den startar då har vi inge o starta med dett afår bär vi göra varje ggn
    componentDidMount(){
        this.props.fetchWorkEx();
    }

    renderWorkEx(){
        return _.map(this.props.work_ex_list, post => { // detta är en lista med flera poster.
            return(
                <li className="list-group-item" key={post.id}>
                    <Card >

                        <Card.Body>
                            <Link to={`/Edit_workEx/${post.id}`}>
                                {post.title}
                                <hr></hr>
                                {post.id}
                                <hr></hr>
                                {post.start_date}
                                <hr></hr>
                                {post.end_date}
                                <hr></hr>
                                {post.decription}

                            </Link>

                        </Card.Body>
                    </Card>

                </li>
            )
        });
    }

    render(){
        return (
            <div>

                <h3>

                    <br />
                </h3>
                <ul className="list-group">
                    {this.renderWorkEx()}
                </ul>
                <Link className="btn btn-primary" to="/AddExperience">
                    Add a Post
                </Link>
            </div>

        );
    };
};

function mapStateToProps(state) {
    return { work_ex_list: state.work_ex.Work_ex };
}


export default connect(mapStateToProps, { fetchWorkEx  })(ExperienceContainer);