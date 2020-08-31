import {
    GET_RESORTS
} from './types'; 

export const getResorts = () => {
    return function(dispatch){
        return fetch("http://localhost:3000/resorts")
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_RESORTS, payload: data}))
    }
}

