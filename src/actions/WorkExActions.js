
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";

export const FETCH_WorkEx = 'WorkEx';
export const UPPDATE_WorkExbyId = 'Uppdate_WorkExbyId';




export const fetchWorkEx = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/work/workid/${id}`);
    dispatch({
        type: FETCH_WorkEx,
        payload: res.data
    });
};



export const createNewEx = (newuser, history) => async dispatch => {
      await axios.post(`${BASE_URL}/work/register`, newuser);
        history.push("/ResumeBoard");


        };

export const getWorkExperienceById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/work/WorkExperienceById/${id}`);
    dispatch({
        type: UPPDATE_WorkExbyId,
        payload: res.data
    });
};
export const updateWorkExperience = (id, update, history) => async dispatch => {
    console.log(id);
    console.log(update);
   await axios.put(`${BASE_URL}/work/upddateWork/${id}`, update);

    history.push("/ResumeBoard");


};

export const deleteWorExpeience = (id, history) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/work/delete/${id}`);

    history.push("/ResumeBoard");


};

