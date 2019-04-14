
import axios from 'axios';

export const FETCH_WorkEx = 'WorkEx';





export const fetchWorkEx = () => async dispatch => {
    const res = await axios.get(`http://localhost:5005/api/users/allWork`);
    dispatch({
        type: FETCH_WorkEx,
        payload: res.data
    });
};

