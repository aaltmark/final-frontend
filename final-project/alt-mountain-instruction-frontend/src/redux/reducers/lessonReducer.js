import {ADD_NEW_LESSON, EDIT_LESSON, DELETE_LESSON, FETCH_LESSONS} from '../actions/types';

const initialState = []


export default function lessonReducer(state = initialState, action){
    switch(action.type){
        case ADD_NEW_LESSON:
            console.log("lesson state", state)
            console.log("lesson payload", action.payload)
            return [...state, action.payload]
        case EDIT_LESSON:
            return state.map((lesson) => {
                if (lesson.id !== action.payload.id) {
                    return lesson
                } else {
                    return action.payload
                }
            })
        case DELETE_LESSON:
            return [...state].filter((lesson) => lesson.id !== action.payload.id);
        case FETCH_LESSONS:
            return action.payload
        default:
            return state
    }
}