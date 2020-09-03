import DatePicker from 'react-datepicker'
import React from 'react'
import {connect} from 'react-redux'
import {Button, Modal, Form} from 'react-bootstrap'
import { editSchedule, getOneSchedule, fetchSchedules } from '../redux/actions/scheduleActions'
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

    componentDidMount(){
        this.props.fetchSchedules()
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
        // this.fetchSchedule()
    }

    //sets global state of schedule so we can asynch update to unavail when booked
    fetchSchedule = () => {
        //getting an error where it's null on first seleection 
        // console.log(this.state.instructorSchedule)
        // getOneSchedule(this.state.instructorSchedule.schedule_id)
    }

    //hides and shows modal to book lesson
    modalShower = () => {
        this.setState({showMode: !this.state.showMode})
    }

    //saves selections of modal form in state
    formSelector = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    //patch instructor sched to show unavail, post new lesson to db, change UI to reflect
    submitHandler = (e) => {
        e.preventDefault()
        //line below patches instructor sched 
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
        console.log(this.props)
        return (
            <div>
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat='yyyy/MM/dd' minDate={new Date()} isClearable/>
                {this.state.instructorSchedule ? 
                    <>
                        {this.state.instructorSchedule.schedule_available ?
                            <>
                                <Modal show={this.state.showMode} onHide={this.modalShower}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Book a Lesson</Modal.Title>
                                    </Modal.Header>
                                    <Form onSubmit={this.submitHandler}>
                                        <Form.Group>
                                            <Form.Label>Date</Form.Label>
                                            <Form.Text>{this.state.instructorSchedule.schedule_date}</Form.Text>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Resort</Form.Label>
                                            {this.props.instructor.resorts.map((resort) => (
                                                <div key={resort.resort_id} className="mb-3">
                                                    <Form.Check inline label={resort.resort_name} type='radio' id={resort.resort_id} name='resort' value={resort.resort_name} onClick={this.formSelector}/>
                                                </div>
                                            ))}
                                        </Form.Group>
                                        <Form.Group>
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
                                        <Form.Group>
                                            <Form.Label>Group Age</Form.Label>
                                            <Form.Control as="select" custom onChange={this.formSelector} name='groupAge'>
                                                <option>Choose an age</option>
                                                <option>Child (12 and under)</option>
                                                <option>Teen (13-19)</option>
                                                <option>Adult (20+)</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group>
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
                                {this.state.booked ?
                                    <>
                                    <button className="booked">Booked</button>
                                    <p><b>You've booked this lesson</b></p>
                                    </>
                                :
                                    <button className="available" onClick={this.modalShower}>Available - Book</button>
                                }

                            </>
                        :
                            <p class="unavailable">Unavailable</p>
                        }
                        
                    </>
                    
                :
                <>
                    {null}
                </>


                
                
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructor: state.instructors,
        schedules: state.schedules
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        editSchedule: (id, instructor_id, date, available) => dispatch(editSchedule(id, instructor_id, date, available)),
        addLesson: (user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => dispatch(addLesson(user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill)),
        getOneSchedule: (id) => dispatch(getOneSchedule(id)),
        fetchSchedules: () => dispatch(fetchSchedules())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector); 




