import React from 'react'
import {connect} from 'react-redux'
import { saveSpecialty } from '../redux/actions/searchActions'


class SearchSpecialty extends React.Component {

    state = {
        skiClicked: false,
        snowboardClicked: false,
        bgColorSki: "white",
        bgColorSnowboard: "white"
    }

    skiClickHandler = () => {
        this.setState({
            skiClicked: true,
            bgColorSki: "blue",

            snowboardClicked: false,
            bgColorSnowboard: "white"
        })
        this.props.selectSpecialty("ski")
        localStorage.setItem('specialty', "ski")
    }

    snowboardClickHandler = () => {
        this.setState({
            skiClicked: false,
            bgColorSki: "white",

            snowboardClicked: true,
            bgColorSnowboard: "blue"
        })
        this.props.selectSpecialty("snowboard")
        localStorage.setItem('specialty', "snowboard")
    }

    render(){
        console.log(this.state)
        return(
            <>
                <div class="specialty-container" >
                    <div className="flex-child" style={{borderColor: this.state.bgColorSki}}>
                        <img onClick={this.skiClickHandler} src="data:image/jpeg;base64,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" alt="ski"/>
                    </div>

                    <div className="flex-child" style={{borderColor: this.state.bgColorSnowboard}} >
                        <img onClick={this.snowboardClickHandler} src="https://i.pinimg.com/originals/36/09/12/3609129695356a0d9764f37c6497b7b7.png" alt="snowboard"/>

                    </div>
                        
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedSpecialty: state.searchSpecialty
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        selectSpecialty: (specialty) => dispatch(saveSpecialty(specialty))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSpecialty);