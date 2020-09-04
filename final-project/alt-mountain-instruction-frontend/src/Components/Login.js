import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.loginUser(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <div class="sign-up">
                <h1>Login</h1>
                    <Form onSubmit={this.submitHandler}>
                        <Form.Group>
                            <Form.Label>Email*</Form.Label>
                            <Form.Control onChange={this.changeHandler} value={this.state.email} placeholder='Enter your email...' name='email' type="text" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password*</Form.Label>
                            <Form.Control onChange={this.changeHandler} value={this.state.password} placeholder='Enter your password...' name='password' type='password' />
                        </Form.Group>
                        <Button type="submit" value='Login'>Login</Button> {this.props.error ? <p class="error-message">{this.props.error}</p> : null}
                    </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.users,
        error: state.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {loginUser: (userObj) => dispatch(loginUser(userObj))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);