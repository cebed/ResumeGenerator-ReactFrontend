import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Experience from "../components/Experience";

class  ExperienceList extends Component {
    render() {
        const experiences = [];
        for (let i = 0; i < 6; i += 1) {
            experiences.push(
                <Experience key={i} />
            );
        }

        return (


            <Card>

                <Card.Body>

                    {experiences}

                </Card.Body>
            </Card>



        );
    }
}
export default ExperienceList;

