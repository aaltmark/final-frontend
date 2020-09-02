import React from 'react'
import {connect} from 'react-redux'
import { getResorts} from '../redux/actions/resortActions'
import { saveResortId, saveResortName } from '../redux/actions/searchActions'
import {Link} from 'react-router-dom'

import Select from 'react-select'
import {Button} from 'react-bootstrap'
import { getInstructors, filterInstructors } from '../redux/actions/instructorActions'
import InstructorPreview from './InstructorPreview'



class SearchResort extends React.Component {

    state = {
        query: '',
        selectedValue: []
    }

    componentDidMount(){
        this.props.fetchResorts()
        this.props.fetchInstructors()
    }

    optionsCreator = () => {
        if (this.props.resorts.length > 0) {

            // return this.props.resorts
            let resorts = this.props.resorts
            const transformed = resorts.map(({id, name}) => ({ label: name, value: id} ))
            return transformed 
        }
    }

    handleChange = (e) => {
        // this.setState({selectedValue: e.value})
        this.props.selectResortId(e.value)
        localStorage.setItem('resort_id', `${e.value}`)

        this.props.selectResortName(e.label)
        localStorage.setItem('resort_name', `${e.label}`)

    }

    filterInstructors = () => {
        let filteredList = this.props.instructors.filter(instructor => instructor.resorts.map(resort => resort.resort_name).toString() === this.props.selectedResortName)
        // filteredList.map(instructor => <InstructorPreview key={instructor.id} instructor={instructor} /> )
        // console.log(filteredList)
        this.props.filterInstructors(filteredList)

    }


    render(){
        const options = (this.optionsCreator())
        // console.log(this.props)
        // console.log(this.state.selectedValue)
        // console.log("global state", this.props.selectedResortId)
        // console.log("local state", this.state.selectedValue)
        return(
            <>
            {this.props.resorts.length > 0 ? 
                <>
                    <h1>Select a Resort:</h1>
                    <Select options={options} onChange={this.handleChange} class="resort-search"/>
                    <br/>
                    {/* <button onClick={this.filterInstructors} class="search-btn">Search for Instructors</button> */}
                    <Link to={`/search/instructors`} class="search-btn" onClick={this.filterInstructors}>Search For Instructors</Link>
                    

                </>
            :
                null
            }
            </>
            
            
        
           
        )
    }

}

const mapStateToProps = (state) => {
    return {
        resorts: state.resorts,
        selectedResortId: state.searchResortId,
        selectedResortName: state.searchResortName,
        instructors: state.instructors
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchResorts: () => dispatch(getResorts()),
        selectResortId: (resortId) => dispatch(saveResortId(resortId)),
        selectResortName: (resortName) => dispatch(saveResortName(resortName)),
        fetchInstructors: () => dispatch(getInstructors()),
        filterInstructors: (instructors) => dispatch(filterInstructors(instructors))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResort); 
