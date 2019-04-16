import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

export const UPDATE_user = 'Update_user';

//this takes the object(projekt) and takes history parameter
//history parameter, this is what is going to allow us to redirect once we submit the form
//async the functions always returns a promise, use it with await means that javascript wait until that promise settles and returns its result
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
        const { token } = res.data;
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

export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setJWTToken(false);
    dispatch({
        type: SET_CURRENT_USER,
        payload: {}
    });
};


export const getUsersById = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5005/api/users/${id}`);
    dispatch({
        type: UPDATE_user,
        payload: res.data
    });
};
    export const UppdateUser = (updateCurrentUser, history, id) => async dispatch => {

        await axios.put(`http://localhost:5005/api/users/allusers/${id}`, updateCurrentUser);
       // await axios.post("http://localhost:5005/api/users/allusers/${id}", updateCurrentUser, id);
        //If everything goes good, send us to our login page
        history.push("/ResumeBoard");
};