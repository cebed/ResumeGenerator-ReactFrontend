import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateWorkExperience , getWorkExperienceById , deleteWorExpeience} from "../actions/WorkExActions";
import {Link} from "react-router-dom";


class  EditExperience extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
            this.props.getWorkExperienceById(id);



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
        this.props.updateWorkExperience(id, update, this.props.history);

    }







    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteWorExpeience(id , this.props.history);

    }


    render() {





        const { id }  = this.props.match.params;

        return (
            <Card>

                <Card.Body>
                    { id }

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text"

                                   placeholder=" title"
                                   name="title"

                                   value={this.state.title}
                                   onChange={this.onChange}
                            />

                        </div>

                        <div className="form-group">
                            <input type="date"

                                   placeholder="start_date"
                                   name="start_date"
                                   value={this.state.start_date}
                                   onChange={this.onChange}

                            />


                        </div>
                        <div className="form-group">
                            <input type="date"

                                   placeholder="end_date"
                                   name="end_date"
                                   value={this.state.end_date}
                                   onChange={this.onChange}

                            />

                            <div >
                       <textarea type="text"

                                 placeholder=" description"
                                 name="description"

                                 value={this.state.description}
                                 onChange={this.onChange}
                       />

                            </div>

                        </div>
                        <Button type="submit" variant="primary" size="lg" block>
                            Save
                        </Button>


                    </form>
                    <button
                        className="btn btn-danger"
                        onClick={this.onDeleteClick.bind(this)}
                        type="submit" variant="primary" size="lg" block
                    >
                        Delete
                    </button>
                </Card.Body>
            </Card>

        );
    }
}
EditExperience.propTypes = {
    updateWorkExperience: PropTypes.func.isRequired,
    deleteWorExpeience: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return { work_ex_list: state.work_ex.Work_ex ,
        user: state.security.user};
}



export default connect(
    mapStateToProps,
    { updateWorkExperience, getWorkExperienceById, deleteWorExpeience }
)(EditExperience);
