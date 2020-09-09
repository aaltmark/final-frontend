import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import Login from '../Components/Login'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

const AccountContainer = (props) => {
    return (
        <>
            {props.user ? props.history.push('/') : 
                <div class="sign-up">
                    <Login />
                    <NavLink to="/signup"><p id="no-account">Don't have an account? Sign up here</p></NavLink>
                    {props.error ? <p class="error">{props.error}</p> : null}
                    
                </div>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.users,
        error: state.errors
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {loginUser: (userObj) => dispatch(loginUser(userObj))}
// }

export default connect(mapStateToProps)(AccountContainer);

