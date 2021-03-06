import React from 'react'
import {connect} from 'react-redux'
import { getOneInstructor } from '../redux/actions/instructorActions'
import DateSelector from './DateSelector'
import ReviewCard from './ReviewCard'
import {ListGroup} from 'react-bootstrap'


class Instructor extends React.Component {

    state = {
        filter: "experience",
        quantity: 0,
        selectedDate: null,
        selectedLesson: []
    }

    componentDidMount(){
        this.props.instructorShow(this.props.match.params.instructorId)
    }

    profileExperienceFilter = () => {
        this.setState({filter: "experience"})
    }

    profileAvailabilityFilter = () => {
        this.setState({filter: "availability"})
    }

    profileReviewsFilter = () => {
        this.setState({filter: "reviews"})
    }

    quantityChanger = (e) => {
        this.setState({quantity: e.target.value})
    }

    createInputs = () => {
        let arr = []
        for (let i = 0; i < this.state.quantity; i++){
            arr.push(<DateSelector index={i} dateChosen={this.dateChosen}/>)
        }
        return(<div>{arr.map(input => input)}</div>)
    }

    dateChosen = (date) => {
        // const newDate = String(date)
        this.setState({selectedDate: date})
        this.instructorLessons()
    }

    instructorLessons = () => {
        if (this.props.instructor.length !== 0) {
            // let selectedLesson = this.props.instructor.schedules.map(lessons => lessons).filter(lesson => lesson.date === this.state.selectedDate)
            // let selectedLesson = this.props.instructor.tests.map(tests => tests).filter(lesson => lesson.test_date === this.state.selectedDate)
            let selectedLesson = this.props.instructor.tests.find(test => test.test_date === this.state.selectedDate)
            this.setState({ selectedLesson: [...this.state.selectedLesson, selectedLesson] })
        }
    }

    render(){
        return(
            <>
            {this.props.instructor.length !== 0 ? 
                <>
                    {/* <div class="instructor-intro">
                        <div class="instructor-image">
                            <img src={this.props.instructor.image} />
                        </div>
                        <h3>{this.props.instructor.name}</h3>
                        <p>{this.props.instructor.specialty}</p> */}
                        <div class="instructor-container">
                            <div class="profile-header">
                                <div class="profile-img">
                                    <img src={this.props.instructor.image} width="200"/>
                                </div>
                                <div class="profile-nav-info">
                                    <h3 class="user-name">{this.props.instructor.name}</h3>
                                    <div class="address">
                                        <p class="state">From: {this.props.instructor.hometown}</p>
                                    </div>
                                </div>
                                <div class="profile-option">
                                </div>
                            </div>
                            <div class="main-bd">
                                <div class="left-side">
                                    <div class="profile-side">
                                        <div class="user-bio">
                                            <h3>{this.props.instructor.specialty} Instructor</h3>
                                            <p class="bio">{this.props.instructor.bio}</p>
                                        </div>
                                        <div class="profile-btn">
                                            <button class="chatbtn">
                                                <i class="fa fa-comment"></i>Message
                                            </button>
                                        </div>
                                        {/* <div class="user-rating">
                                            <h3 class="rating">4.5</h3>
                                            <div class="rate">
                                                <div class="stars">
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                    <i class="fa fa-star"></i>
                                                </div>
                                                <span class="no-user">
                                                <span>123 reviews</span>&nbsp;&nbsp; </span>
                                            </div>
                                        </div> */}
                                    </div>   
                            </div>
                            <div class="right-side">
                                <div class="nav">
                                    <ul>
                                        <li onClick={this.profileExperienceFilter} class="user-post-active">Experience</li>
                                        <li onClick={this.profileAvailabilityFilter} class="user-review">Availability</li>
                                        <li onClick={this.profileReviewsFilter} class="user-setting">Reviews</li>
                                    </ul>
                                </div>
                                <div class="profile-body">
                                    {this.state.filter === "experience" ? 
                                    <>
                                        <div class="profile-posts-tab">
                                            <h3 class="search-header">Certifications</h3>
                                            <ListGroup variant="flush">
                                                {this.props.instructor.experiences.filter(experience => experience.experience_category === "Certification").map(experience =>
                                                    <ListGroup.Item>{experience.experience_name} | {experience.experience_year} </ListGroup.Item>
                                                )}
                                            </ListGroup>

                                            <h3 class="search-header">Work</h3>
                                            <ListGroup variant="flush">
                                                {this.props.instructor.experiences.filter(experience => experience.experience_category === "Work").map(experience =>
                                                        <ListGroup.Item>{experience.experience_name} | {experience.experience_year} </ListGroup.Item>
                                                )}
                                            </ListGroup>

                                           
                                            {/* {this.props.instructor.experiences.map(experience => 
                                                <h4>{experience.experience_category} - {experience.experience_name} - {experience.experience_year}</h4>
                                            )}
                                            <p>put experiences and certification in here</p> */}
                                        </div>
                                    </>
                                    : 
                                        null 
                                    }
                                    {this.state.filter === "availability" ?
                                    <>
                                        <div class="profile-review-tab">
                                            <h1 class="search-header">Availability</h1>
                                            <p>How many lessons would you like?</p>
                                            <input type="number" name="lesson-quantity" value={this.state.quantity} onChange={this.quantityChanger} />
                                            <div class="calendar-selector">
                                                <p>Select date(s):</p>
                                                {this.createInputs()}
                                            </div>
                                            <div class="availability">
                                            </div>
                                        </div>
                                    </>
                                    :
                                        null
                                    }
                                    {this.state.filter === "reviews" ? 
                                    <>
                                        <div class="profile-setting-tab">
                                            {this.props.instructor.reviews.length > 0 ? 
                                            <>
                                                {this.props.instructor.reviews.map(review => <ReviewCard review={review} />)}
                                            </>
                                            :
                                            <p>This instructor has no reviews.</p>
                                            }
                                            
                                        </div>
                                    </>
                                    : 
                                        null 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                null 
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {instructor: state.instructors}
}


const mapDispatchToProps = (dispatch) => {
    return {instructorShow: (id) => dispatch(getOneInstructor(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Instructor); 
