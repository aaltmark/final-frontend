import React from 'react'
import {connect} from 'react-redux'
import {getOneUser} from '../redux/actions/userActions'
import {fetchLessons} from '../redux/actions/lessonActions'

import LessonCard from '../Components/LessonCard'

class LessonContainer extends React.Component {

    componentDidMount(){
        this.props.getOneUser();
        this.props.fetchLessons();
    }
 
    render(){
        console.log(this.props)
        return(
            <>
                {/* {this.props.users ?  */}
                {this.props.lessons.length > 0 ?
                    <>
                        {/* {this.props.users.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} user={this.props.users}/>)} */}
                        {this.props.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} user={this.props.users}/>)}
                    </>
                 :
                    <p>No lessons booked.</p>
                } 
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        lessons: state.lessons 
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getOneUser: () => dispatch(getOneUser()),
        fetchLessons: () => dispatch(fetchLessons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer); 