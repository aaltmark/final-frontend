import {ADD_NEW_LESSON, EDIT_LESSON, DELETE_LESSON} from '../actions/types';

const initialState = []


export default function lessonReducer(state = initialState, action){
    switch(action.type){
        case ADD_NEW_LESSON:
            return action.payload
        case EDIT_LESSON:
            return action.payload 
        case DELETE_LESSON:
            return action.payload
        default:
            return state
    }
}