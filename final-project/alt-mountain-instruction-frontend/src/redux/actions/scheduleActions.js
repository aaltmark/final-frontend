import {EDIT_SCHEDULE} from './types'

export const editSchedule = (id, instructor_id, date, available) => {
    return function(dispatch){
        return fetch(`http://localhost:3000/schedules/${id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'accepts': 'application/json'
            },
            body: JSON.stringify({ 
                id: id, 
                instructor_id: instructor_id,
                date: date, 
                available: available
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: EDIT_SCHEDULE, payload: data}))
    }
}