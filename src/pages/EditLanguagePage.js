import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateLanguage , getCourseById , deleteLanguage} from "../actions/LanguageActions";
//import {Link} from "react-router-dom";


class  EditLanguagePage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
           // this.props.getCourseById(id);



    }
    constructor(){
        super();

        this.state = {

            title: '',
            level: ''

        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            title: this.state.title,
            level: this.state.level,


        };
       // console.log(this.props.match.params);
       // console.log(update);
        const {id} = this.props.match.params
        this.props.updateLanguage(id, update, this.props.history);

    }







    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteLanguage(id , this.props.history);

    }


    render() {






        const { title }  = this.props.language;

        return (
            <Card>
                {this.props.language.id}

                <Card.Body>


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
                            <input type="text"

                                   placeholder="level"
                                   name="level"
                                   value={this.state.level}
                                   onChange={this.onChange}

                            />


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
EditLanguagePage.propTypes = {
    updateLanguage: PropTypes.func.isRequired,
    deleteLanguage: PropTypes.func.isRequired,
    //getCourseById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  language: state.languages.languages  ,
        user: state.security.user};
}



export default connect(
    mapStateToProps,
    { updateLanguage, deleteLanguage }
)(EditLanguagePage);

