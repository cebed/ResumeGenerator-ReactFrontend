import {  UPDATE_SKILLS } from "../actions/SkillsActions";

const initialState = {
    skills: [],
    project: {}
};

export default function(state = initialState, action) {
    switch (action.type) {

        case UPDATE_SKILLS:
            return {
                ...state,
                skills: action.payload
            };


        default:
            return state;
    }
}