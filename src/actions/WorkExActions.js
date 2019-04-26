
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const FETCH_WORK = 'FETCH_WORK';






export const createNewEx = (newuser, history,paramId) => async dispatch => {
      await axios.post(`${BASE_URL}/work/register`, newuser);
        history.push(`/ResumeBoard/${paramId}`);
        };

export const getWorkExperienceById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/work/WorkExperienceById/${id}`);
    dispatch({
        type: FETCH_WORK,
        payload: res.data
    });
};
export const updateWorkExperience = (id, update, history, paramId) => async dispatch => {
   await axios.put(`${BASE_URL}/work/upddateWork/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteWorExpeience = (id, history, paramId) => async dispatch => {
    console.log(id);
    alert("Are you sure?");
    await axios.delete(`${BASE_URL}/work/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};

