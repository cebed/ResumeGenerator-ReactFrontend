import React from "react";
import {Route, Redirect, Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SecureAdminRoute = ({ component: Component, security, ...otherProps }) => (
    <Route
        {...otherProps}
        render={props =>
             security.user.adminOrUser=== true ? (
                <Component {...props} />
            ) : (
                <Redirect to={`/ResumeBoard/${security.user.id}`} />
            )
        }
    />
);

SecureAdminRoute.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(SecureAdminRoute);
