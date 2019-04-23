
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_OTHERS = 'update_others';






export const createNewOthers = (newOthers, history) => async dispatch => {
      await axios.post(`${BASE_URL}/others/reg`, newOthers);
        history.push("/ResumeBoard");
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





export const updateOthers = (id, update, history) => async dispatch => {
   await axios.put(`${BASE_URL}/others/update/${id}`, update);
    history.push("/ResumeBoard");


};

export const deleteOthers= (id, history) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/others/delete/${id}`);

    history.push("/ResumeBoard");


};

