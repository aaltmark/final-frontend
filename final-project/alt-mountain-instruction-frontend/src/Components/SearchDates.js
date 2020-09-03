import React from 'react'
import {connect} from 'react-redux'
import { saveLessonQuantity, saveLessonDates } from '../redux/actions/searchActions'
import {getOneSchedule} from '../redux/actions/scheduleActions'
import {Form, Button} from 'react-bootstrap'
import Calendar from 'react-calendar';



class SearchDates extends React.Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    addDate = () => {
        this.props.selectLessonDates(this.state.date)
    }



    render(){
        console.log(this.props)
        return(
            <>
            
                <div id="calendar">
                    <Calendar onChange={this.onChange} value={this.state.date}/>
                </div>
                <div class="button">
                    <button onClick={this.addDate}>Add Lesson Date</button>
                </div>
                <div class="lesson-dates">
                    <h3>Selected Lesson Dates</h3>
                    {this.props.selectedLessonDates.map(date => (
                        <p>{date.toString()}</p>)
                    )}
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedLessonQuantity: state.searchLessonQuantity,
        selectedLessonDates: state.searchLessonDates,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        selectLessonQuantity: (lessonQuantity) => dispatch(saveLessonQuantity(lessonQuantity)),
        selectLessonDates: (lessonDates) => dispatch(saveLessonDates(lessonDates)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchDates);