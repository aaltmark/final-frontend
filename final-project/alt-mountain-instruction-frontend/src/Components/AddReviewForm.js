import React, { useState } from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import Rating from 'react-rating'
import {connect} from 'react-redux'
import {addReview} from '../redux/actions/reviewActions'
// import { Rating, AirbnbRating } from 'react-native-ratings'

class AddReviewForm extends React.Component {

    state = {
        rating: 0,
        content: '' 
    }

    clickHandler = (e) => {
        this.setState({rating: e})
    }

    reviewChangeHandler = (e) => {
        this.setState({content: e.target.value})
    }

    submitHandler = (e) => {
        this.props.addReview(this.props.user.id, this.props.user.name, this.props.instructor.id, this.state.rating, this.state.content)
        this.props.close()
    }

    modalShower = () => {
        this.props.close()
    }

    render(){
        return(
            <>
                <Modal show={this.props.show} onHide={this.modalShower}>
                    <Modal.Title>Review for {this.props.instructor.name}</Modal.Title>
                <Form onSubmit={this.submitHandler}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Rating</Form.Label>
                            {/* {[...Array(10)].map((star, i) => {
                                const ratingValue = i + 1
                                return (
                                    <>
                                        <input type="checkbox" name="rating" value={ratingValue} onClick={this.clickHandler}/>
                                        <FaStar class="star" size={20}  />
                                    </>
                                )
                            })} */}
                            <Rating {...this.props} stop={10} initialRating={this.state.rating} onChange={this.clickHandler} value={this.state.rating}/>
                            {/* <Rating count={10} reviews={["Terrible", "Bad", "Meh", "OK", "Satisfactory", "Good", "Very Good", "Wow", "Amazing", "Unbelievable"]} size={20} onFinishRating={this.clickHandler} /> */}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Review</Form.Label>
                            <Form.Control as="textarea" rows="3" placeholder="Add details about your experience here..." value={this.state.content} onChange={this.reviewChangeHandler}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="secondary" onClick={this.modalShower}>
                            Close
                        </Button>
                            <Button variant="primary" type="submit">
                                Submit Changes
                            </Button>
                        </Modal.Footer>
                </Form>
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {addReview: (user_id, user_name, instructor_id, rating, content) => dispatch(addReview(user_id, user_name, instructor_id, rating, content))}
}

export default connect(null, mapDispatchToProps)(AddReviewForm); 
