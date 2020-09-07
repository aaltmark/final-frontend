import React from 'react'
import {connect} from 'react-redux'
import { getResorts} from '../redux/actions/resortActions'
import { saveResortId, saveResortName } from '../redux/actions/searchActions'
import {Link} from 'react-router-dom'

import Select from 'react-select'
import {Button, Form} from 'react-bootstrap'
import { getInstructors, filterInstructors } from '../redux/actions/instructorActions'
import InstructorPreview from './InstructorPreview'
import ClipLoader from "react-spinners/ClipLoader";




class SearchResort extends React.Component {

    state = {
        query: '',
        selectedValue: [],
        selectedSpecialty: null
    }

    componentDidMount(){
        this.props.fetchResorts()
        this.props.fetchInstructors()
    }

    optionsCreator = () => {
        if (this.props.resorts.length > 0) {
            let resorts = this.props.resorts
            const transformed = resorts.map(({id, name}) => ({ label: name, value: id} ))
            return transformed 
        }
    }

    handleChange = (e) => {
        this.props.selectResortId(e.value)
        localStorage.setItem('resort_id', `${e.value}`)

        this.props.selectResortName(e.label)
        localStorage.setItem('resort_name', `${e.label}`)

    }

    handleSpecialtyChange = (e) => {
        this.setState({selectedSpecialty: e.target.value})
    }

    filterInstructors = () => {
        // let filteredList = this.props.instructors.filter(instructor => instructor.resorts.map(resort => resort.resort_name).includes(this.props.selectedResortName))
        // this.props.filterInstructors(filteredList)
        let filteredSpecialty = this.props.instructors.filter(instructor => instructor.specialty === this.state.selectedSpecialty)
        let officialFilteredList = filteredSpecialty.filter(instructor => instructor.resorts.map(resort => resort.resort_name).toString().includes(this.props.selectedResortName))
        this.props.filterInstructors(officialFilteredList)
    }


    render(){
        const options = (this.optionsCreator())  
        console.log(this.props.instructors) 
        return(
            <>
            {this.props.resorts.length > 0 && this.props.instructors.length > 0 ? 
                <>
                <div>
                    <h1>Select a Resort:</h1>
                    <Select options={options} onChange={this.handleChange} class="resort-search"/>
                    <br/>
                    {/* <button onClick={this.filterInstructors} class="search-btn">Search for Instructors</button> */}
                    <Link to={`/search/instructors`} class="search-btn" onClick={this.filterInstructors}>Search For Instructors</Link>
                </div>
                <div>
                    <h1>Ski or Snowboard</h1>
                    <Form>
                        <Form.Group>
                            <Form.Control as="select" custom onChange={this.handleSpecialtyChange}>
                                <option>Required: </option>
                                <option>Ski</option>
                                <option>Snowboard</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </div>

                </>
            :
                <div class="loading">
                    <ClipLoader color="aqua" />
                    <img src="https://static.dribbble.com/users/1086141/screenshots/9713060/wolf_mountain-01_4x.png" alt="mountains" />
                </div>

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
        instructors: state.instructors,
        // selectedSpecialty: state.searchSpecialty

    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchResorts: () => dispatch(getResorts()),
        selectResortId: (resortId) => dispatch(saveResortId(resortId)),
        selectResortName: (resortName) => dispatch(saveResortName(resortName)),
        fetchInstructors: () => dispatch(getInstructors()),
        filterInstructors: (instructors) => dispatch(filterInstructors(instructors)),
        // selectSpecialty: (specialty) => dispatch(saveSpecialty(specialty))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResort); 
