import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Experience extends Component {
    render() {
        const {
            experience,
            end_date,
            start_date,
            description,
            id

        } = this.props;
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-4">
                            <span className="mx-auto">{experience}</span>

                        </div>
                        <div className="col-lg-4 col-md-4 col-8">
                            {start_date}
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            {end_date}
                        </div>
                    </div>
                    <div className="row">
                        {description}
                        <Link to={`/EditExperience/${id}`}>
                          Edit WorkExperience
                        </Link>

                    </div>
                </div>
            </div>


        );
    }
}

export default Experience;