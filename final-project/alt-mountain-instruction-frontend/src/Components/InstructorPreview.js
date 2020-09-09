import React from 'react'
import {NavLink} from 'react-bootstrap'


class InstructorPreview extends React.Component {

   instructorResort = () => {
       if (this.props.instructor) {
            let instructor = this.props.instructor 
            let name = instructor.resorts.map(resort => resort.name )
            return name
       }
   }

   averageRating = () => {
       let ratings = this.props.instructor.reviews.map(review => review.rating)
       for ( let i = 0; i < ratings.length; i ++){
           var average = (ratings[i] / ratings.length) * ratings.length
       }
        //return average;
       return (
            <span className='stars'>
                {Array(average).fill(0).map(e => <span class="fa fa-star checked"></span>)}
                {10 - average > 0 ? Array(10 - average).fill(0).map(e => <span class="fa fa-star"></span>) : null}
            </span>
       )
   }

    render(){
        let instructor = this.props.instructor
        return(
            // <>
            // {this.props.instructor ? 
                <>
                        <div class="card-container">
                            <span class="pro">{instructor.certification === true ? "Certified" : null }</span>

                            <img class="round" src={instructor.image} alt="user" />
                            <h3>{instructor.name}</h3>
                            <h6>{instructor.specialty}</h6>
                            <p>
                                Date of Birth: {instructor.dob}<br />
                                Years Experience: {instructor.years_experience} <br /> 
                                {this.averageRating()} ({instructor.reviews.length})
                            </p>
                            <div class = "buttons">
                                <NavLink href={`/instructors/${instructor.id}`}>View Profile</NavLink>
                            </div>
                            <div class="skills">
                                <h6>Resorts</h6>
                                <ul>
                                    {instructor.resorts.map(resort => <li>{resort.resort_name}</li>)}
                                </ul>
                            </div>
                        </div>
                </>
            //     :
            //     <>
            //         <p>There are no instructors that fit this search.</p>
            //         <NavLink href={`/search/resort`}>New Search</NavLink>
            //     </>
            //     }
            // </>

        )
    }
}

export default InstructorPreview; 