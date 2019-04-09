// THIS COMPONENT IS A meeting place for all reducers

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";


export default combineReducers({
    errors: errorReducer
});