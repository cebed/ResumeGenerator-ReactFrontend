import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Back from "../components/Back";


class EditExperienceForm extends Component {
    render() {
        const {
            experience,
            onChange,
            onSubmit,
            state
        } = this.props;
        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card border-dark mb-3">
                            <div className="card-header"><h1 className="display-4 text-center">Edit work experience</h1></div>
                            <div className="card-body">

                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input type="text"

                                               placeholder=" title"
                                               name="title"

                                               value={state}
                                               onChange={onChange}
                                        />

                                    </div>



                                    <div className="saveButton">
                                        <Button type="submit" variant="success" size="lg" block>
                                            Save
                                        </Button>
                                    </div>


                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default EditExperienceForm;