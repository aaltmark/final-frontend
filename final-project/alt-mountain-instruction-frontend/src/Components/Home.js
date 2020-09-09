import React from 'react'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Home extends React.Component {

    render(){
        return(
            <>
                <div className="carousel">
                    <h1 id="home">Book the best ski & snowboard instruction across the USA </h1>
                    <Carousel>
                        <Carousel.Item><img className="d-block w-100" src="https://images2.minutemediacdn.com/image/upload/c_fit,f_auto,fl_lossy,q_auto,w_728/v1555475267/shape/mentalfloss/507308-istock-182184888.jpg?itok=1bpQInZp" alt="ski"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="https://s4894.pcdn.co/wp-content/uploads/2013/01/KGirtman_20120306_BreckSkiSchool_0101.jpg" alt="ski"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="https://www.altabadia.org/media/titelbilder/ski-instructor-freddy-planinschek-1.jpg" alt="ski"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="https://blog-cdn.checkyeti.com/wp-content/uploads/2019/02/xDanish-speaking_ski-instructors_Tignes.jpg.pagespeed.ic.uEsTLySvdR.jpg" alt="ski"/></Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="https://i2.wp.com/www.powder.com/wp-content/uploads/2020/03/IMG_3259.jpeg?w=1600" alt="ski"/></Carousel.Item>
                    </Carousel>
                    <div class="button_cont" align="center">
                        <Link to="/search/resort" class="example_b">Book an Instructor Today</Link>
                    </div>
                </div>
                
            </>
        )
    }
}



export default (Home);