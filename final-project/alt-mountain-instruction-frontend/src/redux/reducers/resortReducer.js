import {GET_RESORTS} from '../actions/types';

const initialState = []


export default function resortReducer(state = initialState, action){
    switch(action.type){
        case GET_RESORTS:
            return action.payload
        default:
            return state
    }
}
