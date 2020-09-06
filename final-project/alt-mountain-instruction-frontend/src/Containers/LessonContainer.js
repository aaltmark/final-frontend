import React from 'react'
import {connect} from 'react-redux'
import {loadUser} from '../redux/actions/userActions'
import {fetchLessons} from '../redux/actions/lessonActions'

import LessonCard from '../Components/LessonCard'

class LessonContainer extends React.Component {

    componentDidMount(){
        this.props.loadUser();
        this.props.fetchLessons();
    }
 
    render(){
        console.log(this.props)
        return(
            <>
                {/* {this.props.users ?  */}
                {this.props.user ?
                    <>
                    {this.props.user.lessons.length > 0 ? 
                        <>
                        {/* {this.props.users.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} user={this.props.users}/>)} */}
                            {this.props.user.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} user={this.props.user}/>)}
                        </>
                        :
                        <p>No lessons booked.</p>
                    }

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
        user: state.users,
        lessons: state.lessons 
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        loadUser: () => dispatch(loadUser()),
        fetchLessons: () => dispatch(fetchLessons())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer); 