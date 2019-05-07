import {UPDATE_LANGUAGE} from "../actions/LanguageActions";

const initialState = {
    languages: [],
    project: {}
};

export default function (state = initialState, action) {
    switch (action.type) {

        case UPDATE_LANGUAGE:
            return {
                ...state,
                languages: action.payload
            };


        default:
            return state;
    }
}
