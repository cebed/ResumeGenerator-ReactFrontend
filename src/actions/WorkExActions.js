
import axios from 'axios';
export const FETCH_WorkEx = 'WorkEx';
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


