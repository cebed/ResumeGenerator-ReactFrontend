
import {FETCH_ALL_USER, FETCH_USER} from "../actions/userActions";

const initialState = {
    validToken: false,
    user: {}
};



export default function(state = initialState, action) {
    switch (action.type) {

        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };
        case FETCH_ALL_USER:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
}