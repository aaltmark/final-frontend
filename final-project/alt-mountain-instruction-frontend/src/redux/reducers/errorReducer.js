import {SIGNUP_ERROR, LOGIN_ERROR} from '../actions/types';

const initialState = null

export default function errorReducer (state = initialState, action){
    switch(action.type){
        case SIGNUP_ERROR: 
            console.log("signup error", action.payload)
            return action.payload 
        case LOGIN_ERROR:
            console.log("login error", action.payload)
            console.log("login error state", state)
            return action.payload
        default:
            return state
    }
}