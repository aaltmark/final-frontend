import {GET_INSTRUCTORS, GET_ONE_INSTRUCTOR, FILTER_INSTRUCTORS} from '../actions/types';

const initialState = []


export default function instructorReducer(state = initialState, action){
    switch(action.type){
        case GET_INSTRUCTORS:
            return action.payload
        case GET_ONE_INSTRUCTOR:
            return action.payload.instructor
        case FILTER_INSTRUCTORS:
            console.log("payload", action.payload)
            console.log("state", state)
            return action.payload
        default:
            return state
    }
}