import {FETCH_EDUCATION} from "../actions/EducationActions";

const initialState = {
    education: [],
    project: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case FETCH_EDUCATION:
            return {
                ...state,
                education: action.payload
            };


        default:
            return state;
    }
}
