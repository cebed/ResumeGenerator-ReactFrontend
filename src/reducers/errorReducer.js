import { GET_ERRORS } from "../actions/securityActions";


const initialState = {};

//takes first the initialstate, means we do not have errors
export default function(state = initialState, action) {
    switch (action.type) {

        //if we have errors from the server this is going to return the errors
        // and this is going to be dispatch to the store!!!!
        //To dispatch the errors to our store we have to hook up this in our root reducer in index.js
        case GET_ERRORS:
            return action.payload;

            //returns the state as it is
        default:
            return state;
    }
}