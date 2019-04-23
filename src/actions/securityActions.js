import axios from "axios";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";
import {BASE_URL} from "../Utils/environment";
export const UPDATE_user = 'Update_user';
export const GET_ERRORS = "GET_ERRORS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";




//this takes the object(projekt) and takes history parameter
//history parameter, this is what is going to allow us to redirect once we submit the form
//async the functions always returns a promise, use it with await means that javascript wait until that promise settles and returns its result
export const createNewUser = (newuser, history) => async dispatch => {

    try {
        await axios.post(`${BASE_URL}/users/register`, newuser);
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
        const res = await axios.post(`${BASE_URL}/users/login`, LoginRequest);

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
    const res = await axios.get(`${BASE_URL}/users/${id}`);
    dispatch({
        type: UPDATE_user,
        payload: res.data
    });
};
    export const UppdateUser = (updateCurrentUser, history, id) => async dispatch => {

        await axios.put(`${BASE_URL}/users/allusers/${id}`, updateCurrentUser);
        history.push("/ResumeBoard");
};


export const generatePdf = (id) => async dispatch => {

alert("Disable ad-block to be able to generate PDF!");
    axios(`${BASE_URL}/users/pdf/${id}`, {
        method: 'GET',
        responseType: 'blob' //Force to receive data in a Blob Format
    })
        .then(response => {
//Create a Blob from the PDF Stream
            const file = new Blob(
                [response.data],
                {type: 'application/pdf'});
//Build a URL from the file
            const fileURL = URL.createObjectURL(file);
//Open the URL on new Window
            window.open(fileURL);
        })
        .catch(error => {
            console.log(error);
        });



};