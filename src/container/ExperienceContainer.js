import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import Experience from "../components/Experience";

class ExperienceContainer extends React.Component {



    renderWorkEx(){
        return _.map(this.props.user.workExperience, list => {
            return(

                    <Experience

                        experience={list.title}
                        end_date = {list.end_date}
                        start_date ={list.start_date}
                        description = {list.description}
                        id = {list.id_workExperience}

                    />
            )
        });
    }

    render(){

const {id} = this.props.user
        return (
            <div>
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header"><h1 className="display-4 text-center">Work Experience</h1></div>

                    {this.renderWorkEx()}

                <Link className="btn btn-primary" to="/AddExperience">
                    Add new Experience
                </Link>
            </div>
            </div>
            </div>

        );
    };
};

function mapStateToProps(state) {
    return {
        user: state.user.user};
}


export default connect(mapStateToProps)(ExperienceContainer);