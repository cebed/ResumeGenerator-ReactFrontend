import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import _ from 'lodash';
import AddLanguagePage from "../pages/AddLanguagePage";
import LanguageComponent from "../components/LanguageComponent";

class LanguageContainer extends React.Component {



    renderWorkEx(){
        return _.map(this.props.user.languages, list => {
            return(

                    <LanguageComponent

                        titleLanguage={list.title}

                        level={list.level}

                        id = {list.id_language}

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
                        <div className="card-header"><h1 className="display-4 text-center">Languages</h1></div>

                    {this.renderWorkEx()}

                <Link className="btn btn-primary" to="/AddLanguagePage">
                    Add Language
                </Link>
            </div>
            </div>
            </div>

        );
    };
};

function mapStateToProps(state) {
    return { language: state.languages.languages ,
        user: state.user.user};
}


export default connect(mapStateToProps)(LanguageContainer);