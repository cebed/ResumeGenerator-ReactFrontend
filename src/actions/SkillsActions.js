
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_COURSE = 'update_course';






export const createNewSkills = (newCourse, history,id) => async dispatch => {
      await axios.post(`${BASE_URL}/skills/reg`, newCourse);
        history.push(`/ResumeBoard/${id}`);
        };
/*
export const getCourseById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/course/Coursesebyid/${id}`);
    dispatch({
        type: UPDATE_COURSE,
        payload: res.data
    });
};
*/

export const updateSkills = (id, update, history,paramId) => async dispatch => {
   await axios.put(`${BASE_URL}/skills/update/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteSkills= (id, history, paramId) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/skills/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};

