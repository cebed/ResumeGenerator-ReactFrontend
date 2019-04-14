// THIS COMPONENT IS A meeting place for all reducers
import reducer_WorkEx from './reducer_WorkEx';
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer"


export default combineReducers({
    errors: errorReducer,
    security: securityReducer,
    work_ex: reducer_WorkEx
});