import {
    LOGIN_SUCCESS, LOGIN_FAIL
} from './types';

loginHandler = (userObj) => {
    fetch("http://localhost:3000/login", {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        // console.log(data.error) //will need to display error on page
        dispatch({type: LOGIN_FAIL, payload: data.error})
      } else {
        const token = localStorage.setItem("token", data.jwt)
        dispatch({type: LOGIN_SUCCESS, payload: token})
      }
    })
  }