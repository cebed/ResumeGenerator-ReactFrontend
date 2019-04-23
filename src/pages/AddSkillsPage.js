import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createNewSkills} from "../actions/SkillsActions";



class  AddSkillsPage extends Component {
    constructor(){
        super();

        this.state = {

            title: '',
            level: '',
            id: ''
        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    onSubmit(event){
        event.preventDefault();
        const newSkills = {
            title: this.state.title,
            level: this.state.level,
            id:this.props.user.id,

        };

        this.props.createNewSkills(newSkills, this.props.history);
    }


    onChange(e){
        this.setState({ [e.target.name]: e.target.value  } );
    }



    render() {




        return (
            <Card>
                <h1>  {this.state.id}</h1>
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
                </Card.Body>
            </Card>

        );
    }
}
AddSkillsPage.propTypes = {
    createNewSkills: PropTypes.func.isRequired,

};
const mapStateToProps = state => ({
    user: state.security.user,

});


export default connect(
    mapStateToProps,
    { createNewSkills }
)(AddSkillsPage);

