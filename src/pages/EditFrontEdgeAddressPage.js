import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateFrontEdgeInformation ,  getFrontEdgeInformation} from "../actions/OthersActions";
import {Link} from "react-router-dom";
import Back from "../components/Back";


class  EditFrontEdgeAddressPage extends Component {
    componentDidMount() {


           this.props.getFrontEdgeInformation(1);



    }
    constructor(){
        super();

        this.state = {

            address: '',
            gata: '',
            postno: '',


        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            address: this.state.address,
            gata: this.state.gata,
            postno: this.state.postno,



        };
       // console.log(this.props.match.params);
       // console.log(update);

        this.props.updateFrontEdgeInformation( update);

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
                        <div className="form-group">
                            <input type="text"

                                   placeholder=" Address"
                                   name="address"

                                   value={this.state.address}
                                   onChange={this.onChange}
                            />

                        </div>

                        <div className="form-group">
                            <input type="text"

                                   placeholder="City"
                                   name="gata"
                                   value={this.state.gata}
                                   onChange={this.onChange}

                            />
                        </div>
                        <div className="form-group">
                            <input type="text"

                                   placeholder="post no"
                                   name="postno"
                                   value={this.state.postno}
                                   onChange={this.onChange}

                            />
                        </div>



                        <div className="saveButton">
                        <Button type="submit" variant="success" size="lg" block>
                            Save
                        </Button>
                        </div>


                    </form>

                                <div className="container">

                                    <div className="row">
                                        <div className="col-12">
                                            <Back/>
                                        </div>


                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
EditFrontEdgeAddressPage.propTypes = {
    updateFrontEdgeInformation: PropTypes.func.isRequired,

    getFrontEdgeInformation: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  others: state.others.others   ,
        user: state.user.user};
}



export default connect(
    mapStateToProps,
    { updateFrontEdgeInformation, getFrontEdgeInformation }
)(EditFrontEdgeAddressPage);

