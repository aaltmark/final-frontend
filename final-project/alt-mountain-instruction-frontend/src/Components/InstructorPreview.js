import React from 'react'


class InstructorPreview extends React.Component {

   instructorResort = () => {
       if (this.props.instructor) {
            let instructor = this.props.instructor 
            let name = instructor.resorts.map(resort => resort.name )
            return name
       }
   }

    render(){
        console.log(this.props.instructor.resorts.map(resort => resort.resort_name))
        let instructor = this.props.instructor
        return(
            <>
                <div class="flex">
                    <div class="card-container">
                        {/* <span class="pro">{instructor.certification === true ? <img src="https://upload.wikimedia.org/wikipedia/en/f/f8/PSIA-AASI_Logos.jpg"/> : null }</span> */}
                        <span class="pro">{instructor.certification === true ? "Certified" : null }</span>

                        <img class="round" src={instructor.image} alt="user" />
                        <h3>{instructor.name}</h3>
                        <h6>{instructor.specialty}</h6>
                        <p>
                            Date of Birth: {instructor.date_of_birth}<br />
                            Years Experience: {instructor.years_experience}
                        </p>
                        <div class = "buttons">
                            <button class="primary">
                                View Profile
                            </button>
                            <button class="primary ghost">
                                Message
                            </button>
                        </div>
                        <div class="skills">
                            <h6>Resorts</h6>
                            <ul>
                                {instructor.resorts.map(resort => <li>{resort.resort_name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default InstructorPreview; 