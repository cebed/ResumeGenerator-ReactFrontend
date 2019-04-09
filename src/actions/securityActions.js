import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";


export const createNewUser = (newuser, history) => async dispatch => {
    
    try {
        await axios.post("http://localhost:5005/api/users/register", newuser);
        //If everything goes good, send us to our login page
        history.push("/");
        dispatch({
            type:GET_ERRORS,
            payload: {}
        });
    }catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload: error.response.data
        });
        
    }
};

//Remember in our backend we have our LoignRequest which is an object that takes an username and password
export const login = LoginRequest => async dispatch => {
    try {
        //fist we need to do is to hit the end point
        //post => Login request
        const res = await axios.post("http://localhost:5005/api/users/login", LoginRequest);

        //extract token from res.data
        const {token} = res.data;
        //store the token in the localStorage
        localStorage.setItem("jwtToken", token);
        //make sure to set our token in header
        setJWTToken(token);
        //decode token on react
        const decoded = jwt_decode(token);

        //dispatch to our securityReducer
        dispatch({
            type: SET_CURRENT_USER,
            payload: decoded
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};