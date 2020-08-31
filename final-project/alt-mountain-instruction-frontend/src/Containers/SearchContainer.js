import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import SearchResort from '../Components/SearchResort'
import SearchSpecialty from '../Components/SearchSpecialty'
import SearchGroup from '../Components/SearchGroup'
import SearchDates from '../Components/SearchDates'
import SearchSubmit from '../Components/SearchSubmit'

class SearchContainer extends React.Component {

    state = {
        searchCounter: 0
    }

    searchIncrementer = (int) => {
        this.setState({searchCounter: this.state.searchCounter + int})
    }
    render(){
        return(
            <>
                <div class="sidebar">
                    <Link to={`${this.props.match.url}/resort`}>Resort</Link>
                    <Link to={`${this.props.match.url}/specialty`}>Specialty</Link>
                    <Link to={`${this.props.match.url}/group`}>Group</Link>
                    <Link to={`${this.props.match.url}/dates`}>Dates </Link>
                    <Link to={`${this.props.match.url}/submit`}>Submit </Link>



                </div>
                <div class="search-component">
                    <Switch>
                        <Route path={`${this.props.match.url}/resort`} render={routerProps => <SearchResort {...routerProps} searchIncrementer={this.searchIncrementer}/>} />
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

export default SearchContainer; 

//localStorage.getItem('specialty') === instructor.specialty || global state specialt y== instructor.specialty 
//localStorage.getItem('group_size) <= instructor.max_group_size 

//send response back to api including all info -- in api grab data and filter 
    //custom class that takes in arg of specialty and calls instances to spit out instructors with specialty 
        //instructor.find_by specialty

