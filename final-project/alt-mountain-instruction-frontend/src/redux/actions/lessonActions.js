 import {
    ADD_NEW_LESSON, 
    EDIT_LESSON,
    DELETE_LESSON,
    FETCH_LESSONS
} from './types'; 



export const addLesson = (user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/lessons`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id, 
                instructor_id: instructor_id, 
                schedule_id: schedule_id,
                date: date,
                resort_name: resort_name, 
                group_size: group_size, 
                group_age: group_age, 
                group_skill: group_skill
            })
        })
        .then(resp => resp.json())
        // .then(data => console.log("add lesson", data))
        .then(data => dispatch({type: ADD_NEW_LESSON, payload: data}))
    }
}

export const editLesson = (id, user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/lessons/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json',
                'accepts': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id, 
                instructor_id: instructor_id, 
                schedule_id: schedule_id,
                date: date,
                resort_name: resort_name, 
                group_size: group_size, 
                group_age: group_age, 
                group_skill: group_skill
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: EDIT_LESSON, payload: data}))
    }
}

export const deleteLesson = (id) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/lessons/${id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: DELETE_LESSON, payload: data}))
    }
}

export const fetchLessons = () => {
    return function(dispatch){
        return fetch('http://localhost:3000/lessons')
        .then(resp => resp.json())
        .then(data => dispatch({type: FETCH_LESSONS, payload: data}))
    }
}