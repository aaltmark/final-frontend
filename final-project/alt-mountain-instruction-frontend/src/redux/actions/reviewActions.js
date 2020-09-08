import {ADD_REVIEW} from './types'

const token = localStorage.getItem('token')

export const addReview = (user_id, user_name, instructor_id, rating, content) => {
    return function(dispatch){
        return fetch('http://localhost:3000/reviews', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                'accepts': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ 
                user_id: user_id,
                user_name: user_name,
                instructor_id: instructor_id,
                rating: rating, 
                content: content
            })
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: ADD_REVIEW, payload: data}))
    }
}

