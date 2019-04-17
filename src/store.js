import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";


//WE WANT TO SET THE INITIALSTATE OF OUR APP PRIO NUMBER 1
const initalState = {};

const middleware = [thunk];

//DEFINE THE STORE
let store;

//CONFIGURATION PART SO STORE WORKS WITH CHROME AND REDUX DEVTOOL AND OTHER BROWSERS
if (window.navigator.userAgent.includes("Chrome")) {
    store = createStore(
        rootReducer,
        initalState,
        compose(
            //PASS AN ARRAY OF MIDDLEWARE
            applyMiddleware(...middleware),
           window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
            //window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

)
    );
} else {
    store = createStore(
        rootReducer,
        initalState,
        compose(applyMiddleware(...middleware))
    );
}
export default store;
