import axios from "axios";
import {GET_ERRORS} from "./types";


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