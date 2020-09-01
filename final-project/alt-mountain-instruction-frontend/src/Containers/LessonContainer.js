import React from 'react'
import {connect} from 'react-redux'
import {getOneUser} from '../redux/actions/userActions'
import LessonCard from '../Components/LessonCard'

class LessonContainer extends React.Component {

    componentDidMount(){
        this.props.getOneUser()
    }
 
    render(){
        console.log(this.props.users)
        return(
            <>
                lesson container 
                {this.props.users ? 
                    <>
                        {this.props.users.lessons.map(lesson => <LessonCard key={lesson.id} lesson={lesson} user={this.props.users}/>)}
                    </>
                :
                    null
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.users}
}

const mapDispatchToProps = (dispatch) => {
    return { getOneUser: () => dispatch(getOneUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonContainer); 