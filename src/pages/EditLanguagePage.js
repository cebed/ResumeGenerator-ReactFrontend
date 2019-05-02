import React, {Component} from 'react';

//import {Link} from "react-router-dom";
//import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Back from "../components/Back"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateLanguage , getLanguageById , deleteLanguage} from "../actions/LanguageActions";
//import {Link} from "react-router-dom";


class  EditLanguagePage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
           this.props.getLanguageById(id);



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
        this.props.updateLanguage(id, update, this.props.history, this.props.user.id);

    }

    componentWillReceiveProps(nextProps) {
        const {
            title,
            level,

        } = nextProps.language;

        this.setState({
            title,
            level
        });
    }






    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteLanguage(id , this.props.history, this.props.user.id);

    }


    render() {

        const { title }  = this.props.language;

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit language</h1></div>
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
                                <span className="input-group-text" id="" style={{width:'90px'}}>Level</span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="level"
                                   name="level"
                                   value={this.state.level}
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
                                <div className="col-6"  style={{padding:'5px'}}>
                                    <Back/>
                                </div>

                                <div className="col-6"  style={{padding:'5px'}}>
                                    <Button
                                        variant="outline-danger"
                                        size="lg"
                                        block
                                        onClick={this.onDeleteClick.bind(this)}
                                        type="submit"  >

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
EditLanguagePage.propTypes = {
    updateLanguage: PropTypes.func.isRequired,
    deleteLanguage: PropTypes.func.isRequired,
    getLanguageById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  language: state.languages.languages  ,
        user: state.user.user};
}



export default connect(
    mapStateToProps,
    { updateLanguage, deleteLanguage, getLanguageById }
)(EditLanguagePage);

