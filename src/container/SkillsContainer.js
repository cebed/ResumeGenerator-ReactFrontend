import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import SkillsComponent from "../components/SkillsComponent";


class SkillsContainer extends React.Component {

    renderWorkEx() {
        return _.map(this.props.user.skills, list => {
            return (

                <SkillsComponent

                    experience={list.title}

                    start_date={list.level}

                    id={list.skills_Id}

                />
            )
        });
    }

    render() {

        //const {id} = this.props.user;
        return (
            <div>
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header">
                            <h1 className="display-4 text-center">Skills</h1>
                        </div>

                        {this.renderWorkEx()}

                        <Link className="btn btn-primary" to="/AddSkillsPage">
                            Add new Skills
                        </Link>
                    </div>
                </div>
            </div>

        );
    };
}

function mapStateToProps(state) {
    return {
        course: state.courses.courses,
        user: state.user.user
    };
}

export default connect(mapStateToProps)(SkillsContainer);
