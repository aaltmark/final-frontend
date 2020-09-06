import {GET_ONE_USER, SIGNUP_USER, LOGIN_USER, LOGOUT_USER, LOAD_USER} from '../actions/types';

const initialState = null


export default function userReducer (state = initialState, action) {
    switch (action.type){
        case GET_ONE_USER:
            return action.payload
        case SIGNUP_USER: 
            console.log("signup", action.payload)
            return action.payload 
        case LOGIN_USER:
            console.log("login", action.payload)
            console.log("login state", state)
            return action.payload
        case LOGOUT_USER:
            return action.payload
        case LOAD_USER: 
            return action.payload
        default:
            return state
    }
}


