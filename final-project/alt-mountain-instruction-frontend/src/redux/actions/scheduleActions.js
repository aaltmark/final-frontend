import {EDIT_SCHEDULE, GET_ONE_SCHEDULE, FETCH_SCHEDULE, MAKE_SCHEDULE_AVAILABLE} from './types'

const token = localStorage.getItem('token')

const editSchedule = (id, instructor_id, date, available) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/schedules/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'accepts': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ 
                id: id, 
                instructor_id: instructor_id,
                date: date, 
                available: available
            })
        })
        .then(resp => resp.json())
        // .then(data => console.log("edit sched", data))
        .then(data => dispatch({type: EDIT_SCHEDULE, payload: data}))
    }
}

const getOneSchedule = (id) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/schedules/${id}`) 
            .then(resp => resp.json())
            .then(data => dispatch({type: GET_ONE_SCHEDULE, payload: data}))
    }
}

const fetchSchedules = () => {
    return function(dispatch){
        return fetch('http://localhost:3000/schedules')
            .then(resp => resp.json())
            .then(data => dispatch({type: FETCH_SCHEDULE, payload: data}))
    }
}

const makeScheduleAvailable = (id, instructor_id, date, available) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/schedules/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'accepts': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ 
                id: id, 
                instructor_id: instructor_id,
                date: date, 
                available: available
            })
        })
        .then(resp => resp.json())
        // .then(data => console.log("edit sched", data))
        .then(data => dispatch({type: MAKE_SCHEDULE_AVAILABLE, payload: data}))
    }
}

export {editSchedule, getOneSchedule, fetchSchedules, makeScheduleAvailable}