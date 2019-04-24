
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_LANGUAGE = 'update_language';






export const createNewLanguage = (newLanguage, history, paramId) => async dispatch => {
      await axios.post(`${BASE_URL}/language/reg`, newLanguage);
        history.push(`/ResumeBoard/${paramId}`);
        };


{

  //  export const getCourseById = (id) => async dispatch => {
    //    const res = await axios.get(`${BASE_URL}/others/Coursesebyid/${id}`);
      //  dispatch({
       //     type: UPDATE_OTHERS,
        //    payload: res.data
       // });
    //};

}





export const updateLanguage = (id, update, history,paramId ) => async dispatch => {
   await axios.put(`${BASE_URL}/language/update/${id}`, update);
    history.push(`/ResumeBoard/${paramId}`);


};

export const deleteLanguage= (id, history, paramId) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/language/delete/${id}`);

    history.push(`/ResumeBoard/${paramId}`);


};

