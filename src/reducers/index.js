// THIS COMPONENT IS A meeting place for all reducers

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer"


export default combineReducers({
    errors: errorReducer,
    security: securityReducer
});