import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import SearchResort from '../Components/SearchResort'
import SearchSpecialty from '../Components/SearchSpecialty'
import SearchGroup from '../Components/SearchGroup'
import SearchDates from '../Components/SearchDates'
import SearchSubmit from '../Components/SearchSubmit'
import InstructorPreview from '../Components/InstructorPreview'
import {connect} from 'react-redux'

class SearchContainer extends React.Component {

    filterPreviews = (instructors) => {
        instructors.map(instructor => <InstructorPreview key={instructor.id} instructor={instructor} />)
    }
    render(){
        console.log(this.props)
        return(
            <>
                {/* <div class="sidebar">
                    <Link to={`${this.props.match.url}/resort`}>Resort</Link>
                    <Link to={`${this.props.match.url}/specialty`}>Specialty</Link>
                    <Link to={`${this.props.match.url}/group`}>Group</Link>
                    <Link to={`${this.props.match.url}/dates`}>Dates </Link>
                    <Link to={`${this.props.match.url}/submit`}>Submit </Link>



                </div> */}
                <div class="search-component">
                    <Switch>
                        <Route path={`${this.props.match.url}/resort`} render={routerProps => <SearchResort {...routerProps} filterPreviews={this.filterPreviews}/>} />
                        <Route path={`${this.props.match.url}/instructors`} render={()=> {
                            if (this.props.instructors.length < 40){
                                return this.props.instructors.map(instructor => <InstructorPreview key={instructor.id} instructor={instructor} />)
                            } 
                        }} />

                        <Route path={`${this.props.match.url}/specialty`} render={routerProps => <SearchSpecialty {...routerProps} />} />
                        <Route path={`${this.props.match.url}/group`} render={routerProps => <SearchGroup {...routerProps} />} />
                        <Route path={`${this.props.match.url}/dates`} render={routerProps => <SearchDates {...routerProps} />} />
                        <Route path={`${this.props.match.url}/submit`} render={routerProps => <SearchSubmit {...routerProps} />} />


                    </Switch>

                </div>
              
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {instructors: state.instructors}
}

export default connect(mapStateToProps)(SearchContainer); 

//localStorage.getItem('specialty') === instructor.specialty || global state specialt y== instructor.specialty 
//localStorage.getItem('group_size) <= instructor.max_group_size 

//send response back to api including all info -- in api grab data and filter 
    //custom class that takes in arg of specialty and calls instances to spit out instructors with specialty 
        //instructor.find_by specialty

