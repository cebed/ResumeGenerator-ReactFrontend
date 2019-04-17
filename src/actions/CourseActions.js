
import axios from 'axios';
import {BASE_URL} from "../Utils/environment";
export const UPDATE_COURSE = 'update_course';






export const createNewCourse = (newCourse, history) => async dispatch => {
      await axios.post(`${BASE_URL}/course/register`, newCourse);
        history.push("/ResumeBoard");
        };

export const getCourseById = (id) => async dispatch => {
    const res = await axios.get(`${BASE_URL}/course/CourseseById/${id}`);
    dispatch({
        type: UPDATE_COURSE,
        payload: res.data
    });
};


export const updateCourse = (id, update, history) => async dispatch => {
   await axios.put(`${BASE_URL}/course/update/${id}`, update);
    history.push("/ResumeBoard");


};

export const deleteCourse= (id, history) => async dispatch => {
    console.log(id);

    await axios.delete(`${BASE_URL}/course/delete/${id}`);

    history.push("/ResumeBoard");


};

