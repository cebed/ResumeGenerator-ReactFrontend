import { FETCH_WorkEx } from "../actions/WorkExActions";

const initialState = {
    Work_ex: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_WorkEx:
            return {
                ...state,
                Work_ex: action.payload
            };


        default:
            return state;
    }
}