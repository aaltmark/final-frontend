import {
    GET_INSTRUCTORS,
    GET_ONE_INSTRUCTOR, 
    SEARCH_INSTRUCTORS, 
    FILTER_INSTRUCTORS
} from './types'; 

export const getInstructors = () => {
    return function(dispatch){
        return fetch("http://localhost:3000/instructors")
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_INSTRUCTORS, payload: data}))
    }
}

export const getOneInstructor = (id) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/instructors/${id}`)
        .then(resp => resp.json())
        .then(data => dispatch({type: GET_ONE_INSTRUCTOR, payload: data}))
    }
}

export const searchInstructors = (id) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/instructors`)
        .then(resp => resp.json())
        .then(data => dispatch({type: SEARCH_INSTRUCTORS, payload: data}))
    }
}

export const filterInstructors = (instructors) => ({ type: FILTER_INSTRUCTORS, payload: instructors})


