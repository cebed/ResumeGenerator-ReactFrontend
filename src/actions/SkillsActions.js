import axios from 'axios';
import {BASE_URL} from "../Utils/environment";

export const UPDATE_SKILLS = 'update_skills';


export const createNewSkills = (newCourse, history, id) => async dispatch => {
    await axios.post(`${BASE_URL}/skills/reg`, newCourse);
    history.push(`/ResumeBoard/${id}`);
};

export const getTheSkillsById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/skills/getSkillsById/${id}`);
    dispatch({
        type: UPDATE_SKILLS,
        payload: res.data
    });
};


export const updateSkills = (id, update, history, paramId) => async dispatch => {
    await axios.put(`${BASE_URL}/skills/update/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteSkills = (id, history, paramId) => async dispatch => {
    console.log(id);
    alert("Are you sure?");
    await axios.delete(`${BASE_URL}/skills/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};

