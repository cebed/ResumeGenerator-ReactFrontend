import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
//import {forgotPassword} from "../actions/OthersActions";
import Back from "../components/Back";


class  ForgotPasswordPage extends Component {

    constructor(){
        super();

        this.state = {

            email: '',



        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            email: this.state.email,



        };


      //  this.props.forgotPassword( update);

    }








    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }




    render() {



        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit Location</h1></div>
                            <div className="card-body">





                    <form onSubmit={this.onSubmit}>

                        <div className="input-group" style={{padding:'5px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="" style={{width:'90px'}}>Email</span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder=" email"
                                   name="email"
                                   value={this.state.email}
                                   onChange={this.onChange}
                            />
                        </div>






                        <Button type="submit" variant="success" size="lg" block>
                            Update your password
                        </Button>



                    </form>


                                        <div className="col-16">
                                            <Back/>
                                        </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
ForgotPasswordPage.propTypes = {
    forgotPassword: PropTypes.func.isRequired,




};



export default connect(

    { /*forgotPassword*/ }
)(ForgotPasswordPage);

