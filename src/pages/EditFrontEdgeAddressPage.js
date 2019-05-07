import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateFrontEdgeInformation, getFrontEdgeInformation} from "../actions/OthersActions";
import Back from "../components/Back";


class EditFrontEdgeAddressPage extends Component {

    componentDidMount() {
        this.props.getFrontEdgeInformation(1);
    }

    constructor() {
        super();

        this.state = {

            address: '',
            gata: '',
            postno: '',


        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event) {
        event.preventDefault();
        const update = {
            address: this.state.address,
            gata: this.state.gata,
            postno: this.state.postno,


        };

        this.props.updateFrontEdgeInformation(update);

    }

    componentWillReceiveProps(nextProps) {
        const {
            address,
            gata,
            postno,

        } = nextProps.others;

        this.setState({
            address,
            gata,
            postno
        });
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header">
                                <h1 className="display-4 text-center">Edit Location</h1>
                            </div>
                            <div className="card-body">


                                <form onSubmit={this.onSubmit}>

                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Address
                                            </span>
                                        </div>

                                        <input type="text" className="form-control"
                                               placeholder=" Address"
                                               name="address"
                                               value={this.state.address}
                                               onChange={this.onChange}
                                        />
                                    </div>


                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="" style={{width: '90px'}}>City</span>
                                        </div>
                                        <input type="text" className="form-control"
                                               placeholder="City"
                                               name="gata"
                                               value={this.state.gata}
                                               onChange={this.onChange}
                                        />
                                    </div>


                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Post no
                                            </span>
                                        </div>
                                        <input type="text" className="form-control"
                                               placeholder="Post number"
                                               name="postno"
                                               value={this.state.postno}
                                               onChange={this.onChange}
                                        />
                                    </div>


                                    <Button type="submit" variant="success" size="lg" block>
                                        Save
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

EditFrontEdgeAddressPage.propTypes = {
    updateFrontEdgeInformation: PropTypes.func.isRequired,

    getFrontEdgeInformation: PropTypes.func.isRequired,


};

function mapStateToProps(state) {
    return {
        others: state.others.others,
        user: state.user.user
    };
}


export default connect(
    mapStateToProps,
    {updateFrontEdgeInformation, getFrontEdgeInformation}
)(EditFrontEdgeAddressPage);

