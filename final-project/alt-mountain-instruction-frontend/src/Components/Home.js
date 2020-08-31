import React from 'react'
import {connect} from 'react-redux'

class Home extends React.Component {

    render(){
        return(
            <>
                <div>
                    <h1>Alt Instruction</h1>
                    {/* <SearchForm/> */}
                </div>
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user 
})

export default connect(mapStateToProps)(Home);