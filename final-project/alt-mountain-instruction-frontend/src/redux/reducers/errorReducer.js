import {GET_ERRORS, CLEAR_ERRORS} from '../actions/types';

const initialState = {
    msg: {},
    status: null, 
    id: null
}

export default function errorReducer(state = initialState, action){
    switch(action.type){
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id //if we want to target specific error for something
            }
        case CLEAR_ERRORS: //reset
            return{
                msg: {},
                status: null,
                id: null
            }
        default: 
            return state    
    }
}