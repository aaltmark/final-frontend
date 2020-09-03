import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal, Form} from 'react-bootstrap'
import { editSchedule, getOneSchedule } from '../redux/actions/scheduleActions'
import {addLesson} from '../redux/actions/lessonActions'

class LessonBooker extends React.Component {
    state = {
        showMode: true, 
        resort: null,
        groupAge: null,
        groupSize: null,
        groupSkill: null 
    }


    modalShower = () => {
        this.setState({showMode: !this.state.showMode})
    }

    formSelector = (e) => {
        // console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
        // this.setState({resort: })
    }

    submitHandler = (e) => {
        e.preventDefault()
        //line below patches instructor lesson 
        this.props.editSchedule(this.state.instructorSchedule.schedule_id, this.props.instructor.id, this.state.instructorSchedule.schedule_date, false)

        //post lesson
        this.props.addLesson(1, this.props.instructor.id, this.state.instructorSchedule.schedule_date, this.state.resort, this.state.groupSize, this.state.groupAge, this.state.groupSkill )

        //handle presentation 
        this.setState({
            showMode: !this.state.showMode
        })
        
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <Modal show={!this.state.showMode} onHide={this.modalShower}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book a Lesson</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.submitHandler}>{/* need to make submit handler to patch and post*/}
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Text>{this.state.instructorSchedule.schedule_date}</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Resort</Form.Label>
                                {this.props.instructor.resorts.map((resort) => (
                                    <div key='inline-radio' className="mb-3">
                                        <Form.Check inline label={resort.resort_name} type='radio' id={resort.resort_id} name='resort' value={resort.resort_name} onClick={this.formSelector}/>
                                    </div>
                                    ))}
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Group Size</Form.Label>
                                <Form.Control as="select" custom onChange={this.formSelector} name='groupSize'>
                                    <option>Groups of 1-6</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Group Age</Form.Label>
                                <Form.Control as="select" custom onChange={this.formSelector} name='groupAge'>
                                    <option>Choose an age</option>
                                    <option>Child (12 and under)</option>
                                    <option>Teen (13-19)</option>
                                    <option>Adult (20+)</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Group Skill Level</Form.Label>
                                <Form.Control as="select" custom onChange={this.formSelector} name='groupSkill'>
                                    <option>Choose a level</option>
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Expert</option>
                                </Form.Control>
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.modalShower}>
                                    Close
                                </Button>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form> 
                    </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getOneSchedule: (id) => dispatch(getOneSchedule(id)),
        addLesson: (user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => dispatch(addLesson(user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill)),
        editSchedule: (id, instructor_id, date, available) => dispatch(editSchedule(id, instructor_id, date, available))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonBooker); 