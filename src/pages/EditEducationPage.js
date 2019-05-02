import React, {Component} from 'react';

import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateEducation , deleteEducation, getEduById} from "../actions/EducationActions";
import {Link} from "react-router-dom";
import Back from "../components/Back";


class  EditEducationPage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
           this.props.getEduById(id);



    }
    constructor(){
        super();

        this.state = {

            title: '',
            start_date: '',
            end_date: '',
            description: '',

        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            title: this.state.title,
            start_date: this.state.start_date,
            end_date: this.state.end_date,
            description: this.state.description,


        };
       // console.log(this.props.match.params);
       // console.log(update);
        const {id} = this.props.match.params
        this.props.updateEducation(id, update, this.props.history, this.props.user.id);

    }

    componentWillReceiveProps(nextProps) {
        const {
            title,
            start_date,
            end_date,
            description
        } = nextProps.education;

        this.setState({
            title,
            start_date,
            end_date,
            description
        });
    }





    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteEducation(id , this.props.history, this.props.user.id);

    }


    render() {

        const { title }  = this.props.education;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit education</h1></div>
                            <div className="card-body">





                    <form onSubmit={this.onSubmit}>
                        <div className="input-group" style={{padding:'5px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="" style={{width:'90px'}}>Title</span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder=" title"
                                   name="title"
                                   value={this.state.title}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="input-group" style={{padding:'5px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="" style={{width:'90px'}}>Start date</span>
                            </div>
                            <input type="date" className="form-control"
                                   placeholder="start_date"
                                   name="start_date"
                                   value={this.state.start_date}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div className="input-group" style={{padding:'5px'}}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="" style={{width:'90px'}}>End date</span>
                            </div>
                            <input type="date" className="form-control"
                                   placeholder="end_date"
                                   name="end_date"
                                   value={this.state.end_date}
                                   onChange={this.onChange}
                            />
                        </div>

                        <div style={{padding:'5px'}}>
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


                        <div className="saveButton" style={{margin:'5px'}}>
                        <Button type="submit" variant="success" size="lg" block>
                            Save
                        </Button>
                        </div>


                    </form>

                                <div className="container">

                                    <div className="row">
                                        <div className="col-6" style={{padding:'5px'}}>
                                            <Back/>
                                        </div>

                                        <div className="col-6" style={{padding:'5px'}}>
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
            </div>

        );
    }
}
EditEducationPage.propTypes = {
    updateEducation: PropTypes.func.isRequired,
    deleteEducation: PropTypes.func.isRequired,
   getEduById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  education: state.education.education  ,
        user: state.user.user};
}



export default connect(
    mapStateToProps,
    { updateEducation,  deleteEducation, getEduById }
)(EditEducationPage);

