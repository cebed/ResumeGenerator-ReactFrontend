// THIS COMPONENT IS A meeting place for all reducers
import reducer_WorkEx from './reducer_WorkEx';
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import securityReducer from "./securityReducer"
import reducer_Course from "./reducer_Course";
import reducer_Others from "./reducer_Others";
import reducer_Language from "./reducer_Language";
import userReducer from "./userReducer";


export default combineReducers({
    errors: errorReducer,
    security: securityReducer,
    work_ex: reducer_WorkEx,
    courses:  reducer_Course,
    others: reducer_Others,
    languages: reducer_Language,
    user: userReducer
});