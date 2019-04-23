import {  UPDATE_OTHERS } from "../actions/OthersActions";

const initialState = {
    others: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case UPDATE_OTHERS:
            return {
                ...state,
                others: action.payload
            };


        default:
            return state;
    }
}