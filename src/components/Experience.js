import React, {Component} from 'react';


class Experience extends Component {
    render() {
        const {
            experience,
            end_date,
            start_date,
            description

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
                    </div>
                </div>
            </div>


        );
    }
}

export default Experience;