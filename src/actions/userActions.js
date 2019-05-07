import axios from "axios";
//import setJWTToken from "../securityUtils/setJWTToken";
//import jwt_decode from "jwt-decode";
import {BASE_URL} from "../Utils/environment";

export const FETCH_USER = 'FETCH_USER';
export const GET_ERRORS = "GET_ERRORS";
export const FETCH_ALL_USER = "FETCH_ALL_USER";


export const getUsersById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/users/${id}`);
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};
export const fechUsers = () => async dispatch => {
    const res = await axios.get(`${BASE_URL}/users/all`);
    dispatch({
        type: FETCH_ALL_USER,
        payload: res.data
    });
};



