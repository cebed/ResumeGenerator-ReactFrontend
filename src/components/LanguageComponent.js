import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class LanguageComponent extends Component {
    render() {
        const {
            titleLanguage,
            level,
            id

        } = this.props;
        return (

            <div className="container">
                <div className="card card-body bg-light mb-3" >
                    <div className="row">
                        <div className="col-4">
                            <div className="row">{titleLanguage}</div>
                            <div className="row">{level}</div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-8">

                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <Link className="fa fa-edit pr-1" to={`/EditLanguagePage/${id}`}>
                                Edit Language
                            </Link>

                        </div>
                    </div>

                </div>
            </div>


        );
    }
}

export default LanguageComponent;