import React, {Component} from 'react';
import Header from "../layout/header";
import Footer from "../layout/footer";

class Signup extends Component {
    render() {
        return (
            <signup>
                <Header/>
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

                                    <li className="list-group-item update">
                                        <i className="fa fa-edit pr-1"> Update Info</i>
                                    </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                <Footer/>
            </signup>

        );
    }
}

export default Signup;