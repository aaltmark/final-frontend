import {
    GET_ONE_USER, SIGNUP_ERROR, SIGNUP_USER, LOAD_USER, LOGIN_USER, LOGIN_ERROR, LOGOUT_USER
} from './types'; 


export const getOneUser = () => {
    return function(dispatch){
        return fetch(`http://localhost:3000/users/1`)
        .then(resp => resp.json())
        // .then(data => console.log(data))
        .then(data => dispatch({type: GET_ONE_USER, payload: data.user}))
    }
}

export const signupUser = (email, password, name) => {
    return function(dispatch){
        return fetch("http://localhost:3000/users", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({
                email: email, 
                password: password,
                name: name
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    dispatch({type: SIGNUP_ERROR, payload: data.error})
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch({type: SIGNUP_USER, payload: data.user})
                }
            })
    }
}

export const loginUser = (userObj) => {
    return function(dispatch){
        return fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            }, 
            body: JSON.stringify({
                user: userObj
                // email: email, 
                // password: password 
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error){
                dispatch({type: LOGIN_ERROR, payload: data.error})
            } else {
                localStorage.setItem("token", data.jwt)
                dispatch({type: LOGIN_USER, payload: data.user})
            }
        })
    }
}

export const logoutUser = () => ({ type: LOGOUT_USER, payload: null })

export const loadUser = () => {
    return function(dispatch){
        const token = localStorage.getItem("token")
        if (token) {
            fetch("http://localhost:3000/profile", {
                method: "GET", 
                headers: {Authorization: `Bearer ${token}`},
            })
            .then(resp => resp.json())
            .then(data => dispatch({type: LOAD_USER, payload: data.user}))
        }
    }
}



