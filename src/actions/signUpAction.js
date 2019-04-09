import axios from "axios";
import { GET_ERRORS } from "./types";

//this takes the object(projekt) and takes history parameter
//history parameter, this is what is going to allow us to redirect once we submit the form
//async the functions always returns a promise, use it with await means that javascript wait until that promise settles and returns its result
export const signUpProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/api/project", project);
        history.push("/dashboard");
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};