import React, {Component} from 'react';

class Signup extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">Username</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <input type="text" className="form-control form-control"/>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">

                                <a href="#">
                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Info</i>
                                    </li>
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;