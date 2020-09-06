import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { connect } from 'react-redux'
import { logoutUser, loadUser } from '../redux/actions/userActions'

class NavBar extends React.Component {

    componentDidMount(){
        this.props.loadUser();
    }

    logOut (e) {
        localStorage.removeItem("token")
        this.props.logoutUser();
    }

    render(){
        const userLinks = (
            <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/lessons">Lessons</Nav.Link>
                {/* <Nav.Link href="/messages">Messages</Nav.Link> */}
                <Nav.Link href="/search/resort">Search</Nav.Link>
                <Nav.Item><Nav.Link href="/" onClick={this.logOut} >Log Out</Nav.Link></Nav.Item>
            </>
        ); 
        const guestLinks = (
            <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/search/resort">Search</Nav.Link>
            </>
        );
        return(
            <Container>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="/">Alt Instruction</Navbar.Brand>
                    <Nav className="mr-auto">
                        {this.props.user ? 
                            userLinks
                            :
                            guestLinks
                        }
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        user: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        loadUser: () => dispatch(loadUser())
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);