import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap"

const Back = ({ history }) => (
    <Button  variant="outline-danger" size="lg" block onClick={history.goBack}>Cancel</Button>


);

export default withRouter(Back);