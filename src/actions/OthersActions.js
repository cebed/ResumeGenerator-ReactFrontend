
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_OTHERS = 'update_others';






export const createNewOthers = (newOthers, history, paramId) => async dispatch => {
      await axios.post(`${BASE_URL}/others/reg`, newOthers);
        history.push(`/ResumeBoard/${paramId}`);
        };




   export const getOthersById = (id) => async dispatch => {
     const res = await axios.get(`${BASE_URL}/others/getOthersById/${id}`);
        dispatch({
           type: UPDATE_OTHERS,
            payload: res.data
        });
    };







export const updateOthers = (id, update, history,paramId) => async dispatch => {
   await axios.put(`${BASE_URL}/others/update/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteOthers= (id, history, paramId) => async dispatch => {
    console.log(id);
    alert("Are you sure?");
    await axios.delete(`${BASE_URL}/others/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};



export const getFrontEdgeInformation = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/company/byId/${id}`);
    dispatch({
        type: UPDATE_OTHERS,
        payload: res.data
    });
};
export const updateFrontEdgeInformation = ( update) => async dispatch => {
    await axios.post(`${BASE_URL}/company/register`, update);



};
