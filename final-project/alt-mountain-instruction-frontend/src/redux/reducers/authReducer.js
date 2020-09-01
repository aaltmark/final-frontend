import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function authReducer(state = initialState, action){
    switch(action.type) {
        case LOGIN_SUCCESS:
        // case REGISTER_SUCCESS:
            return {
                ...state, 
                ...action.payload, //will have user and token
                isAuthenticated: true,
                isLoading: false,
            }
        // case USER_LOADING:
        //     return {
        //         ...state, 
        //         isLoading: true
        //     }
        // case USER_LOADED: //run all the time to see if we're logged in 
        //     return {
        //         ...state, 
        //         isAuthenticated: true,
        //         isLoading: false,
        //         user: action.payload
        //     }
        // case AUTH_ERROR:
        // case LOGIN_FAIL:
        // case LOGOUT_SUCCESS:
        // case REGISTER_FAIL:
        //     return{
        //         ...state,
        //         token: null,
        //         user: null,
        //         isAuthenticated: false,
        //         isLoading: false
        //     }
        // default: 
        //     return state; 
        // }
    }
}