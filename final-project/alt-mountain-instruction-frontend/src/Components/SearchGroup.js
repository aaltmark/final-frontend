import React from 'react'
import {connect} from 'react-redux'
import { saveGroupSize, saveGroupAge, saveGroupSkill } from '../redux/actions/searchActions'
import {Form} from 'react-bootstrap'


class SearchGroup extends React.Component {

    state = {
        groupSize: null,
        groupSkill: null,
        groupAge: null
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
        localStorage.setItem(`${e.target.name}`, `${e.target.value}`)
        if (e.target.name === "groupSize"){
            this.props.selectGroupSize(e.target.value)
        } else if (e.target.name === "groupSkill"){
            this.props.selectGroupSkill(e.target.value)
        } else {
            this.props.selectGroupAge(e.target.value)
        }
    }


    render(){
        console.log(this.state)
        return(
            <>
            
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>How many people are in your group?</Form.Label>
                        <Form.Control as="select" name="groupSize" onChange={this.changeHandler} placeholder="Normal text">
                            <option>Choose 1-6</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>What is the age of your group?</Form.Label>
                        <Form.Control as="select" name="groupAge" onChange={this.changeHandler}>
                            <option>Choose Age Range</option>
                            <option>Child (12 and under)</option>
                            <option>Teen (13-19)</option>
                            <option>Adult (20+)</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>What is the experience level of your group?</Form.Label>
                        <Form.Control as="select" name="groupSkill" onChange={this.changeHandler}>
                            <option>Recommend 1 skill level per group</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </Form.Control>
                    </Form.Group>
                    
                </Form>
    
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedGroupSize: state.searchGroupSize,
        selectedGroupAge: state.searchGroupAge,
        selectedGroupSkill: state.searchGroupSkill
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        selectGroupSize: (groupSize) => dispatch(saveGroupSize(groupSize)),
        selectGroupAge: (groupAge) => dispatch(saveGroupAge(groupAge)),
        selectGroupSkill: (groupSkill) => dispatch(saveGroupSkill(groupSkill))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchGroup);