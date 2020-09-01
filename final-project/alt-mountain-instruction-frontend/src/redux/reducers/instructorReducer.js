import {GET_INSTRUCTORS, GET_ONE_INSTRUCTOR, SEARCH_INSTRUCTORS} from '../actions/types';

const initialState = []


export default function instructorReducer(state = initialState, action){
    switch(action.type){
        case GET_INSTRUCTORS:
            return action.payload
        case GET_ONE_INSTRUCTOR:
            return action.payload.instructor
        case SEARCH_INSTRUCTORS:
            // return action.payload
            let instructors = action.payload.map(instructor => instructor)
            console.log(instructors)
        default:
            return state
    }
}