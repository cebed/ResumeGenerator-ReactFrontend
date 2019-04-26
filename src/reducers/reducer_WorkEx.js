import {  FETCH_WORK } from "../actions/WorkExActions";

const initialState = {

    work: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case FETCH_WORK:
            return {
                ...state,
                work: action.payload
            };


        default:
            return state;
    }
}