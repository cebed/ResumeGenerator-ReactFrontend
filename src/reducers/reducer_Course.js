import {  UPDATE_COURSE } from "../actions/CourseActions";

const initialState = {
    courses: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case UPDATE_COURSE:
            return {
                ...state,
                courses: action.payload
            };


        default:
            return state;
    }
}