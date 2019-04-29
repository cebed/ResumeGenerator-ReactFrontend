import React, {Component} from 'react';


//import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateOthers , getOthersById , deleteOthers} from "../actions/OthersActions";
import Back from "../components/Back";
//import {Link} from "react-router-dom";


class  EditOthersPage extends Component {
    componentDidMount() {

            const { id }  = this.props.match.params;
            this.props.getOthersById(id);



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
        this.props.updateOthers(id, update, this.props.history, this.props.user.id);

    }

    componentWillReceiveProps(nextProps) {
        const {
            title,
            description,

        } = nextProps.others;

        this.setState({
            title,
            description
        });
    }





    onChange(e){
        this.setState({ [e.target.name]: e.target.value } );
    }

    onDeleteClick(){
        const { id }  = this.props.match.params;
        this.props.deleteOthers(id , this.props.history, this.props.user.id);

    }


    render() {

        const { title }  = this.props.others;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit other competences</h1></div>
                            <div className="card-body">
                {this.props.others.id}




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

                       <div className="saveButton">
                        <Button type="submit" variant="success" size="lg" block>
                            Save
                        </Button>
                       </div>


                    </form>

                                <div className="container">

                                    <div className="row">
                                        <div className="col-6">
                                            <Back/>
                                        </div>

                                        <div className="col-6">
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
EditOthersPage.propTypes = {
    updateOthers: PropTypes.func.isRequired,
    deleteOthers: PropTypes.func.isRequired,
    getOthersById: PropTypes.func.isRequired,


};
function mapStateToProps(state) {
    return {  others: state.others.others  ,
        user: state.user.user};
}



export default connect(
    mapStateToProps,
    { updateOthers, getOthersById, deleteOthers }
)(EditOthersPage);

