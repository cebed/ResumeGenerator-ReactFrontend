import axios from 'axios';
import {BASE_URL} from "../Utils/environment";

export const FETCH_EDUCATION = 'update_education';


export const createNewEducation = (newEducation, history, paramid) => async dispatch => {
    await axios.post(`${BASE_URL}/edu/reg`, newEducation);
    history.push(`/ResumeBoard/${paramid}`);
};


export const getEduById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/edu/EduById/${id}`);
    dispatch({
        type: FETCH_EDUCATION,
        payload: res.data
    });
};


export const updateEducation = (id, update, history, paramId) => async dispatch => {
    await axios.put(`${BASE_URL}/edu/update/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteEducation = (id, history, paramId) => async dispatch => {
    console.log(id);
    alert("Are you sure?");
    await axios.delete(`${BASE_URL}/edu/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};

