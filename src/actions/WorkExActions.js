
import axios from 'axios';
export const FETCH_WorkEx = 'WorkEx';
export const UPPDATE_WorkExbyId = 'Uppdate_WorkExbyId';
export const fetchWorkEx = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5005/api/work/workid/${id}`);
    dispatch({
        type: FETCH_WorkEx,
        payload: res.data
    });
};


export const createNewEx = (newuser, history) => async dispatch => {
      await axios.post("http://localhost:5005/api/work/register", newuser);
        history.push("/ResumeBoard");


        };

export const getWorkExperienceById = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:5005/api/work/WorkExperienceById/${id}`);
    dispatch({
        type: UPPDATE_WorkExbyId,
        payload: res.data
    });
};
export const updateWorkExperience = (id, update, history) => async dispatch => {
    console.log(id);
    console.log(update);
   await axios.put(`http://localhost:5005/api/work/upddateWork/${id}`, update);

    history.push("/ResumeBoard");


};

export const deleteWorExpeience = (id, history) => async dispatch => {
    console.log(id);

    await axios.delete(`http://localhost:5005/api/work/delete/${id}`);

    history.push("/ResumeBoard");


};

