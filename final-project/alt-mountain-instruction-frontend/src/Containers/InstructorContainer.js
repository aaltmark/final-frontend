import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Instructor from '../Components/Instructor'
import InstructorPreview from '../Components/InstructorPreview'
import {connect} from 'react-redux'
import { getInstructors} from '../redux/actions/instructorActions'



class InstructorContainer extends React.Component {

    // componentDidMount(){
    //     this.props.fetchInstructors()
    // }

    
    render(){
        return(
            <div>
                <Switch>
                    <Route path={`${this.props.match.url}/:instructorId`} render={routerProps => <Instructor key="instructor_id" {...routerProps}/> }/>
                    {/* <Route path={`${this.props.match.url}`} render={routerProps => <InstructorPreview {...routerProps}/>} /> */}
                    {/* <Route exact path={`${this.props.match.url}`} render={()=> {
                        if (this.props.instructors.length > 0) {
                            return this.props.instructors.map(instructor => <InstructorPreview key={instructor.id} instructor={instructor}/>)

                        } else {
                            return null 
                        }
                    }}/> */}


                </Switch>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {instructors: state.instructors}
// }

// const mapDispatchToProps = (dispatch) => {
//     console.group("why are you running")
//     return { fetchInstructors: () => dispatch(getInstructors())}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(InstructorContainer); 
export default InstructorContainer; 
