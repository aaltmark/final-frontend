import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {searchInstructors} from '../redux/actions/instructorActions'

class SearchSubmit extends React.Component {

    submitHandler = () => {
        this.props.searchInstructors()
    }

    render(){
        console.log(this.props)
        return(
            <>
                <div>
                    <h4>Selected Resort: </h4><p>{this.props.selectedResortName}</p><Link to="/search/resort">Edit</Link>
                    <h4>Selected Specialty: </h4><p>{this.props.selectedSpecialty}</p><Link to="/search/specialty">Edit</Link>
                    <h4>Group Details:</h4><Link to="/search/group">Edit</Link>
                        <p>Group Size: {this.props.selectedGroupSize}</p>
                        <p>Group Age: {this.props.selectedGroupAge}</p>
                        <p>Group Skill Level: {this.props.selectedGroupSkill}</p>
                    <h4>Lesson Dates</h4><Link to="/search/dates">Edit</Link>
                    {this.props.selectedLessonDates.map(date => (
                            <p>{date.toString()}</p>)
                        )}
                </div>
                <button onClick={this.submitHandler}>Search for Instructors</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedResortId: state.searchResortId,
        selectedResortName: state.searchResortName,
        selectedSpecialty: state.searchSpecialty,
        selectedGroupSize: state.searchGroupSize,
        selectedGroupAge: state.searchGroupAge,
        selectedGroupSkill: state.searchGroupSkill,
        selectedLessonDates: state.searchLessonDates,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchInstructors: () => dispatch(searchInstructors())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchSubmit);