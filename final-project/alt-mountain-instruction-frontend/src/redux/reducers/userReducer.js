import {GET_ONE_USER} from '../actions/types';

const initialState = null 

export default function userReducer (state = initialState, action) {
    switch (action.type){
        case GET_ONE_USER:
            return action.payload
        default:
            return state
    }
}

