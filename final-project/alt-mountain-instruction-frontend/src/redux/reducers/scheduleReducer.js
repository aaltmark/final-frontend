import {EDIT_SCHEDULE} from '../actions/types';

const initialState = null


export default function scheduleReducer(state = initialState, action){
    switch(action.type){
        case EDIT_SCHEDULE:
            return action.payload
        default:
            return state
    }
}