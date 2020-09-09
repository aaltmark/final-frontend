import React, { useEffect } from 'react' 
import {Card} from 'react-bootstrap'

class ReviewCard extends React.Component {

    render(){
        console.log(this.props.review)
        return(
            <Card>
                <Card.Header><b>Review by:</b> {this.props.review.user_name}</Card.Header>
                <Card.Title>
                    <span className='stars'>
                        {Array(this.props.review.rating).fill(0).map(e => <span class="fa fa-star checked"></span>)}
                        {10 - this.props.review.rating > 0 ? Array(10 - this.props.review.rating).fill(0).map(e => <span class="fa fa-star"></span>) : null}
                    </span>
                </Card.Title>
                <Card.Text>
                    {this.props.review.created.slice(0, 10)} <br/>
                    {this.props.review.content}
                </Card.Text>  
            </Card>
        )
    }
}

export default ReviewCard; 
