import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWorkEx  } from '../actions/WorkExActions';
import _ from 'lodash';
import Experience from "./Experience";

class ExperienceContainer extends React.Component {

    componentDidMount(){
        this.props.fetchWorkEx(this.props.user.id);
    }

    renderWorkEx(){
        return _.map(this.props.work_ex_list, post => {
            return(

                    <Experience
                        experience={post.title}
                        end_date = {post.end_date}
                        start_date ={post.start_date}
                        description = {post.description}
                        id={post.id}

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
                <h4> Work Experience</h4>
                {id}
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
    return { work_ex_list: state.work_ex.Work_ex ,
        user: state.security.user};
}


export default connect(mapStateToProps, { fetchWorkEx  })(ExperienceContainer);