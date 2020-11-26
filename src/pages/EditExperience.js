import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateWorkExperience, getWorkExperienceById, deleteWorExpeience} from "../actions/WorkExActions";
import Back from "../components/Back";


class EditExperience extends Component {
    componentDidMount() {

        const {id} = this.props.match.params;
        this.props.getWorkExperienceById(id);


    }

    constructor() {
        super();

        this.state = {

            title: '',
            company: '',
            start_date: '',
            end_date: '',
            description: '',

        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event) {
        event.preventDefault();
        const update = {
            title: this.state.title,
            company: this.state.company,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,

        };

        const {id} = this.props.match.params;
        this.props.updateWorkExperience(id, update, this.props.history, this.props.user.id);

    }

    componentWillReceiveProps(nextProps) {
        const {
            title,
            company,
            start_date,
            end_date,
            description,

        } = nextProps.work;

        this.setState({
            title,
            company,
            start_date,
            end_date,
            description
        });
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onDeleteClick() {
        const {id} = this.props.match.params;
        this.props.deleteWorExpeience(id, this.props.history, this.props.user.id);

    }


    render() {


        //const {id} = this.props.match.params;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header">
                                <h1 className="display-4 text-center">Edit work experience</h1>
                            </div>
                            <div className="card-body">

                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group" style={{padding: '5px'}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id=""
                                                  style={{width: '90px'}}>Title
                                            </span>
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
                                                  style={{width: '90px'}}>Company
                                            </span>
                                        </div>
                                        <input type="text" className="form-control"
                                               placeholder="Company"
                                               name="company"
                                               value={this.state.company}
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

                                    <div className="saveButton" style={{margin: '5px'}}>
                                        <Button type="submit" variant="success" size="lg" block>
                                            Save
                                        </Button>
                                    </div>


                                </form>
                                <div className="container">

                                    <div className="row">
                                        <div className="col-6" style={{padding: '5px'}}>
                                            <Back/>
                                        </div>

                                        <div className="col-6" style={{padding: '5px'}}>
                                            <Button
                                                variant="outline-danger"
                                                size="lg"
                                                block
                                                onClick={this.onDeleteClick.bind(this)}
                                                type="submit">

                                                Delete
                                            </Button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div Style="height:300px"></div>
            </div>


        );
    }
}

EditExperience.propTypes = {
    updateWorkExperience: PropTypes.func.isRequired,
    deleteWorExpeience: PropTypes.func.isRequired,


};

function mapStateToProps(state) {
    return {
        work: state.work.work,
        user: state.user.user
    };
}


export default connect(
    mapStateToProps,
    {updateWorkExperience, getWorkExperienceById, deleteWorExpeience}
)(EditExperience);

