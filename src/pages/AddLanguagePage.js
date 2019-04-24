import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewLanguage} from "../actions/LanguageActions";
import Back from "../components/Back";



class  AddLanguagePage extends Component {
    constructor(){
        super();

        this.state = {

            title: '',
            level:'',
            id: ''
        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event){
        event.preventDefault();
        const newLanguage = {
            title: this.state.title,
            level: this.state.level,
            id:this.props.user.id,

        };

        this.props.createNewLanguage(newLanguage, this.props.history, this.props.user.id);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value  } );
    }



    render() {




        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Add language</h1></div>
                            <div className="card-body">
                            <h1>  {this.state.id}</h1>


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
AddLanguagePage.propTypes = {
    createNewLanguage: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.user.user,

});


export default connect(
    mapStateToProps,
    { createNewLanguage }
)(AddLanguagePage);

