import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

//check token and load user 
export const loadUser = () => (dispatch, getState) => {
    //user loading 
    dispatch({ type: USER_LOADING});

    //get token from localStorage 

    const token = getState().auth.token; 
    //https://www.youtube.com/watch?v=qyomEaXQJFk
    //17 min mark

    fetch("http://")
}