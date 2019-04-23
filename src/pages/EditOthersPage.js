import React, {Component} from 'react';


import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOthers , getCourseById , deleteOthers} from "../actions/OthersActions";
import {Link} from "react-router-dom";


class  EditOthersPage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
           // this.props.getCourseById(id);



    }
    constructor(){
        super();

        this.state = {

            title: '',
            description: ''

        }
        ;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }





    onSubmit(event){
        event.preventDefault();
        const update = {
            title: this.state.title,
            description: this.state.description,


        };
       // console.log(this.props.match.params);
       // console.log(update);
        const {id} = this.props.match.params
        this.props.updateOthers(id, update, this.props.history);

    }







    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteOthers(id , this.props.history);

    }


    render() {






        const { title }  = this.props.other;

        return (
            <Card>
                {this.props.other.id}

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

                                   placeholder="description"
                                   name="description"
                                   value={this.state.description}
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
EditOthersPage.propTypes = {
    updateOthers: PropTypes.func.isRequired,
    deleteOthers: PropTypes.func.isRequired,
    //getCourseById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  other: state.others.others  ,
        user: state.security.user};
}



export default connect(
    mapStateToProps,
    { updateOthers, deleteOthers }
)(EditOthersPage);

