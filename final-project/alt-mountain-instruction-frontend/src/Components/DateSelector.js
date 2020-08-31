import DatePicker from 'react-datepicker'
import React, { useState } from 'react'

class DateSelector extends React.Component {
    state = {
        // startDate: null,
        year: "",
        month: "", 
        day: ""
    }

    handleSelect  = (date) => {
        let string = String(date)
        let newString = string.substr(0, 15)
        this.props.dateChosen(newString)
    }
    
    handleChange = date => {
        this.setState({startDate: date})
        this.handleSelect(date)
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.dateChosen(this.state.year + "-" + this.state.month + "-" + this.state.day)
    }

    render(){
        return (
            <div>
                <DatePicker selected={this.state.startDate} onChange={this.handleChange} dateFormat='yyyy/MM/dd' minDate={new Date()} isClearable/>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Year: 
                        <input type="number" name="year" value={this.state.year} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Month: 
                        <input type="number" name="month" value={this.state.month} onChange={this.changeHandler} />
                    </label>
                    <label>
                        Day: 
                        <input type="number" name="day" value={this.state.day} onChange={this.changeHandler} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default DateSelector; 




