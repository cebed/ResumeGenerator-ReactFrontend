import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Experience from "../components/Experience";
import ExperienceList from "./ExperienceList";
import AddExperience from "./AddExperience";

class  ExperienceContainer extends Component {
    render() {

        return (


            <Card>

                <Card.Body>
                    <Card.Title>Work Expirience</Card.Title>
                <ExperienceList></ExperienceList>
                    <AddExperience></AddExperience>


                </Card.Body>
            </Card>



        );
    }
}
export default ExperienceContainer;

