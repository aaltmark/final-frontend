import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userActions'
 

class Signup extends React.Component {
    state = {
        email: '',
        password: '',
        name: ''
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.signupUser(this.state.email, this.state.password, this.state.name)
    }

    render() {
        return (
            <>
                {this.props.user ? this.props.history.push('/') :

                <>
      
                    <div class="sign-up">
                        <h1 id="sign-up-title">Signup</h1>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Email*</Form.Label>
                                        <Form.Control onChange={this.changeHandler} value={this.state.email} placeholder='Enter your email...' name='email' type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Password*</Form.Label>
                                        <Form.Control onChange={this.changeHandler} value={this.state.password} placeholder='Use capitalization and special characters...' name='password' type='password' />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Group>
                                <Form.Label>Name*</Form.Label>
                                <Form.Control onChange={this.changeHandler} value={this.state.name} placeholder='Enter your name here...' name='name' type='text' />
                            </Form.Group>
                            <Button type="submit">Create User</Button> {this.props.error ? <p className="error">{this.props.error}</p> : null}
                        </Form>
                        {/* {this.props.error ? <p class="error">{this.props.error}</p> : null} */}
                    </div>
                </>
                }
            </>
    
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
    return {signupUser: (email, password, name) => dispatch(signupUser(email, password, name))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);