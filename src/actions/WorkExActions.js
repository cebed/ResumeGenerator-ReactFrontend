
import axios from 'axios';
export const FETCH_WorkEx = 'WorkEx';
export const fetchWorkEx = () => async dispatch => {
    const res = await axios.get(`http://localhost:5005/api/work/all`);
    dispatch({
        type: FETCH_WorkEx,
        payload: res.data
    });
};

export const createNewEx = (newuser, history) => async dispatch => {
      await axios.post("http://localhost:5005/api/work/register", newuser);
        history.push("/ResumeBoard");


        };


