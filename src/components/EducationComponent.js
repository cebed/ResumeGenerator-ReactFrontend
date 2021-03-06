import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class EducationComponent extends Component {
    render() {
        const {
            experience,
            start_date,
            end_date,
            description,
            id

        } = this.props;
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-4">
                            <div className="row">{experience}</div>
                            <div className="row">{start_date}</div>
                            <div className="row">{end_date}</div>
                            <div className="row">{description}</div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-8">

                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <Link className="fa fa-edit pr-1" to={`/EditEducationPage/${id}`}>
                                Edit Education
                            </Link>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default EducationComponent;
