import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewEducation} from "../actions/EducationActions";
import Back from "../components/Back";


class AddEducationPage extends Component {
    constructor() {
        super();

        this.state = {
            description: '',
            title: '',
            start_date: '',
            end_date: '',
            id: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        event.preventDefault();
        const newEducation = {

            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,
            id: this.props.user.id,

        };

        this.props.createNewEducation(newEducation, this.props.history, this.props.user.id);
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
                                <h1 className="display-4 text-center">Add education</h1>
                            </div>
                            <div className="card-body">
                                <h1>
                                    {this.state.id}
                                </h1>


                                <form onSubmit={this.onSubmit}>

                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Title</span>
                                        </div>

                                        <input type="text" className="form-control"
                                               placeholder=" title"
                                               name="title"
                                               value={this.state.title}
                                               onChange={this.onChange}
                                        />
                                    </div>


                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Start date
                                            </span>
                                        </div>

                                        <input type="date" className="form-control"
                                               placeholder="start_date"
                                               name="start_date"
                                               value={this.state.start_date}
                                               onChange={this.onChange}
                                        />
                                    </div>

                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>End date
                                            </span>
                                        </div>

                                        <input type="date" className="form-control"
                                               placeholder="end_date"
                                               name="end_date"
                                               value={this.state.end_date}
                                               onChange={this.onChange}
                                        />
                                    </div>

                                    <div style={{padding: '5px'}}>
                                        <div>
                                            <h6>Description</h6>
                                        </div>
                                        <textarea className="form-control" rows="5" id="comment"
                                                  placeholder=" description"
                                                  name="description"
                                                  value={this.state.description}
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

AddEducationPage.propTypes = {
    createNewEducation: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.security.user,

});


export default connect(
    mapStateToProps,
    {createNewEducation}
)(AddEducationPage);

