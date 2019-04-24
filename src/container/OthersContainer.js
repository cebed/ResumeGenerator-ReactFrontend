import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import AddOthersPage from "../pages/AddOthersPage";
import OthersComponent from "../components/OthersComponent";

class OthersContainer extends React.Component {



    renderWorkEx(){
        return _.map(this.props.user.others, list => {
            return(

                    <OthersComponent

                        titleOthers={list.title}

                        description={list.description}

                        id = {list.others_Id}

                    />
            )
        });
    }

    render(){

const {id} = this.props.user
        return (
            <div>
                <div className="container">
                    <div className="card card-body bg-light mb-3">
                        <div className="card-header"><h1 className="display-4 text-center">Other competences</h1></div>

                    {this.renderWorkEx()}

                <Link className="btn btn-primary" to="/AddOthersPage">
                    Add new information
                </Link>
            </div>
            </div>
            </div>

        );
    };
};

function mapStateToProps(state) {
    return { other: state.others.others ,
        user: state.user.user};
}


export default connect(mapStateToProps)(OthersContainer);