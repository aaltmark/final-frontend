import {
    GET_ONE_USER, 
} from './types'; 


export const getOneUser = () => {
    return function(dispatch){
        return fetch(`http://localhost:3000/users/1`)
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(data => dispatch({type: GET_ONE_USER, payload: data.user}))
    }
}
