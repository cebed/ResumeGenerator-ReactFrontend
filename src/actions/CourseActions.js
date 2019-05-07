import axios from 'axios';
import {BASE_URL} from "../Utils/environment";

export const UPDATE_COURSE = 'update_course';


export const createNewCourse = (newCourse, id, history) => async dispatch => {
    await axios.post(`${BASE_URL}/course/register`, newCourse);
    history.push(`/ResumeBoard/${id}`);
};

export const getCourseById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/course/Coursesebyid/${id}`);
    dispatch({
        type: UPDATE_COURSE,
        payload: res.data
    });
};


export const updateCourse = (id, update, history, id_) => async dispatch => {
    await axios.put(`${BASE_URL}/course/update/${id}`, update);
    history.push(`/ResumeBoard/${id_}`);


};

export const deleteCourse = (id, history, paramid) => async dispatch => {
    console.log(id);
    alert("Are you sure?");
    await axios.delete(`${BASE_URL}/course/delete/${id}`);

    history.push(`/ResumeBoard/${paramid}`);


};

