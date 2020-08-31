import React from 'react'
import {connect} from 'react-redux'
import { getResorts} from '../redux/actions/resortActions'
import { saveResortId, saveResortName } from '../redux/actions/searchActions'
import {Link} from 'react-router-dom'

import Select from 'react-select'



class SearchResort extends React.Component {

    state = {
        query: '',
        selectedValue: []
    }

    componentDidMount(){
        this.props.fetchResorts()
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


    render(){
        const options = (this.optionsCreator())
        console.log(this.optionsCreator())
        // console.log(this.state.selectedValue)
        console.log("global state", this.props.selectedResortId)
        // console.log("local state", this.state.selectedValue)
        // console.log("Props", this.props)
        return(
            <>
            {this.props.resorts.length > 0 ? 
                <>
                    <h1>Search for a Resort:</h1>
                    <Select options={options} onChange={this.handleChange}/>
                    

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
        selectedResortName: state.searchResortName
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetchResorts: () => dispatch(getResorts()),
        selectResortId: (resortId) => dispatch(saveResortId(resortId)),
        selectResortName: (resortName) => dispatch(saveResortName(resortName))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResort); 
