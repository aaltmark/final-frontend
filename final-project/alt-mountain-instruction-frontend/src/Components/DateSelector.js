import DatePicker from 'react-datepicker'
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Button, Modal, Form} from 'react-bootstrap'
import { editSchedule } from '../redux/actions/scheduleActions'
import {addLesson} from '../redux/actions/lessonActions'

class DateSelector extends React.Component {
    state = {
        startDate: null,
        selected: false,
        instructorSchedule: null,
        selectedLessons: [],
        booked: false,
        showMode: false, 
        resort: null,
        groupAge: null,
        groupSize: null,
        groupSkill: null 
    }

    
    //takes in date from DatePicker and converts it to match backend
    handleChange = date => {
        this.setState({startDate: date})
        let newDate = String(date).substr(0, 15)
        this.findAvailability(newDate)
    }

    //gets schedule for that day and puts it into state to cause a rerender
    findAvailability = (newDate) => {
        let instructorSchedule = this.props.instructor.schedules.find(schedule => schedule.schedule_date === newDate)
        this.setState({ instructorSchedule: instructorSchedule })
    }

    modalShower = () => {
        this.setState({showMode: !this.state.showMode})
    }

    formSelector = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        //line below patches instructor lesson 
        this.props.editSchedule(this.state.instructorSchedule.schedule_id, this.props.instructor.id, this.state.instructorSchedule.schedule_date, false)

        //post lesson
        this.props.addLesson(1, this.props.instructor.id, this.state.instructorSchedule.schedule_id, this.state.instructorSchedule.schedule_date, this.state.resort, this.state.groupSize, this.state.groupAge, this.state.groupSkill )

        //handle presentation 
        this.setState({
            booked: !this.state.booked,
            showMode: !this.state.showMode
        })
        
    }

    render(){
        // console.log(this.state.resort, this.state.groupAge, this.state.groupSize, this.state.groupSkill)
        // console.log(this.state.instructorSchedule)
        return (
            <div>
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat='yyyy/MM/dd' minDate={new Date()} isClearable/>
                {this.state.instructorSchedule ? 
                    <>
                        {this.state.instructorSchedule.schedule_available ?
                            <>
                                <button className="available" onClick={this.modalShower}>Available - Book</button>
                                {/* {this.state.showMode ? <LessonBooker /> : null } */}
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
                                    {this.state.booked ? <p>You've booked this lesson!</p> : null}
                            </>
                        :
                            <p class="unavailable">Unavailable</p>
                        }
                        
                    </>
                    
                :
                <>
                    <p class="unavailable">Nothing available today</p>
                </>


                
                
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {instructor: state.instructors}
}

const mapDispatchToProps = (dispatch) => {
    return { 
        editSchedule: (id, instructor_id, date, available) => dispatch(editSchedule(id, instructor_id, date, available)),
        addLesson: (user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => dispatch(addLesson(user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector); 




