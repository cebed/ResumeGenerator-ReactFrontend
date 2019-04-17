import {  UPPDATE_WorkExbyId } from "../actions/WorkExActions";

const initialState = {
    Work_ex: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case UPPDATE_WorkExbyId:
            return {
                ...state,
                Work_ex: action.payload
            };


        default:
            return state;
    }
}