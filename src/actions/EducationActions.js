
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_Education = 'update_education';






export const createNewEducation = (newEducation, history) => async dispatch => {
      await axios.post(`${BASE_URL}/edu/reg`, newEducation);
        history.push("/ResumeBoard");
        };


/*
export const getCourseById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/course/Coursesebyid/${id}`);
    dispatch({
        type: UPDATE_Education,
        payload: res.data
    });
};

*/
export const updateEducation = (id, update, history) => async dispatch => {
   await axios.put(`${BASE_URL}/edu/update/${id}`, update);
    history.push("/ResumeBoard");


};

export const deleteEducation= (id, history) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/edu/delete/${id}`);

    history.push("/ResumeBoard");


};

