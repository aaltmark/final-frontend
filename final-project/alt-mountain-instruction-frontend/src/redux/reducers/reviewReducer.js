import {ADD_REVIEW} from '../actions/types';

const initialState = []


export default function reviewReducer(state = initialState, action){
    switch(action.type){
        case ADD_REVIEW:
            return action.payload
        default:
            return state
    }
}
