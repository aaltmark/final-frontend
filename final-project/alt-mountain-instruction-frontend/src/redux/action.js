export const signInUser = (userObj) =>  {
    return function(dispatch){
        return fetch("http://localhost:3000/login", {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
                accepts: 'application/json'
            },
            body: JSON.stringify({ user: userObj})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.error){
                console.log(data.error)
            } else {
                dispatch({ type: "sign_in_user", payload: data})
            }
        })
    }
}