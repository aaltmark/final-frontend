import React from 'react'
import {connect} from 'react-redux'
import {getOneInstructor} from '../redux/actions/instructorActions'
import {editLesson, deleteLesson} from '../redux/actions/lessonActions'
import {getOneSchedule, makeScheduleAvailable} from '../redux/actions/scheduleActions'
import {NavLink} from 'react-router-dom'
import {Card, Button, CardColumns, Modal, Form} from 'react-bootstrap'
import AddReviewForm from './AddReviewForm'


class LessonCard extends React.Component {

    state = {
        showMode: false,
        resort: null,
        groupAge: null,
        groupSize: null,
        groupSkill: null ,
        showAddReview: false
    }

    componentDidMount(){
        this.props.getOneInstructor(this.props.lesson.instructor_id)
        this.props.getOneSchedule(this.props.lesson.schedule_id)
    }

    editClickHandler = () =>{
        this.setState({showMode: !this.state.showMode})
    }

    formSelector = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    editSubmitHandler = (e) => {
        e.preventDefault()
        this.props.editLesson(this.props.lesson.id, this.props.user.id, this.props.lesson.instructor_id, this.props.lesson.schedule_id, this.props.lesson.date, this.state.resort, parseInt(this.state.groupSize, 10), this.state.groupAge, this.state.groupSkill)
        this.setState({showMode: !this.state.showMode})
    }

    deleteClickHandler = (e) => {
        e.preventDefault()
        this.props.deleteLesson(this.props.lesson.id)
        // this.props.makeScheduleAvailable(this.props.schedule.id, this.props.schedule.instructor_id, this.props.schedule.date, true)
        this.props.makeScheduleAvailable(this.props.lesson.schedule.id, this.props.lesson.schedule.instructor_id, this.props.lesson.schedule.date, true)

        //id, instructor id, date, schedule
    }

    showAddReview = () => {
        this.setState({showAddReview: true})
    }

    closeAddReview = () => {
        this.setState({showAddReview: false})
    }

    render() {
        console.log(this.props.instructor)
        return (
            <div class="lesson-container">
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.lesson.instructor.image} />
                    <Card.Body>
                        <Card.Title>
                            Lesson with: <NavLink to={`/instructors/${this.props.lesson.instructor.id}`}>{this.props.lesson.instructor.name}</NavLink> <br/> 
                            {this.props.lesson.date} <br/>
                            {this.props.user.reviews.map(review => review.instructor_id).includes(this.props.lesson.instructor_id) ?
                                <Button variant="secondary" onClick={this.showAddReview} block disabled>Previously Reviewed</Button>
                            :
                                <Button variant="warning" onClick={this.showAddReview} block>Review this Instructor</Button>

                            }
                            {/* <Button variant="warning" onClick={this.showAddReview} block>Review this Instructor</Button> */}
                        </Card.Title>
                        <Card.Text>
                            <b>Resort:</b> {this.props.lesson.resort_name}<br/>
                            <b>Group Size:</b> {this.props.lesson.group_size}<br/>
                            <b>Group Age:</b> {this.props.lesson.group_age}<br/>
                            <b>Group Skill:</b> {this.props.lesson.group_skill}
                        </Card.Text>
                        <Button type="button" class="edit-lesson-btn" variant="primary" onClick={this.editClickHandler}>Edit Lesson</Button>
                        <Button type="button" variant="danger" onClick={this.deleteClickHandler}>Delete Lesson</Button>

                    </Card.Body>
                </Card>
                <AddReviewForm show={this.state.showAddReview} close={this.closeAddReview} instructor={this.props.lesson.instructor} user={this.props.user}/>
                {this.state.showMode ? 
                    <>
                        <Modal show={this.state.showMode} onHide={this.modalShower}>
                            <Modal.Header>
                                <Modal.Title>Edit Lesson</Modal.Title>
                            </Modal.Header>
                            <Form onSubmit={this.editSubmitHandler}>
                                <Form.Group>
                                    <Form.Label>Date</Form.Label>
                                    <Form.Text>{this.props.lesson.date}</Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Resort</Form.Label>
                                    {this.props.lesson.instructor.resorts.map((resort) => (
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
                                <Button type="button" variant="secondary" onClick={this.editClickHandler}>
                                    Close
                                </Button>
                                    <Button variant="primary" type="submit">
                                        Submit Changes
                                    </Button>
                                </Modal.Footer>
                            </Form> 
                        </Modal>
                    </>
                
            
                :
                    null
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        instructor: state.instructors,
        schedule: state.schedules 
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getOneInstructor: (id) => dispatch(getOneInstructor(id)),
        editLesson: (id, user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill) => dispatch(editLesson(id, user_id, instructor_id, schedule_id, date, resort_name, group_size, group_age, group_skill)),
        deleteLesson: (id) => dispatch(deleteLesson(id)),
        getOneSchedule: (id) => dispatch(getOneSchedule(id)),
        makeScheduleAvailable: (id, instructor_id, date, available) => dispatch(makeScheduleAvailable(id, instructor_id, date, available)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LessonCard); 
