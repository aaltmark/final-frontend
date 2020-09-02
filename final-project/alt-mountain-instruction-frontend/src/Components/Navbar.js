import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import { connect } from 'react-redux'
// import { logout } from '../redux/actions/authActions'

class NavBar extends React.Component {

    //not logged i need: home, view all instructors, login/register
    //logged in i need: home, view all instructors, my profile

    logOut (e) {
        e.preventDefault();
        // this.props.logout();
    }

    render(){
        // const { isAuthenticated } = this.props.auth 
        const userLinks = (
            <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/lessons">Lessons</Nav.Link>
                <Nav.Link href="/messages">Messages</Nav.Link>
                <Nav.Link href="/search/resort">Search</Nav.Link>

                {/* <Nav.Link href="/" onClick={this.logout.bind(this)}>Logout</Nav.Link> */}

            </>
        ); 
        const guestLinks = (
            <>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </>
        );
        return(
            <Container>
                <Navbar bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="/">Alt Instruction</Navbar.Brand>
                    <Nav className="mr-auto">
                        {userLinks}
                    </Nav>
                </Navbar>
            </Container>
        )
    }
}

// NavBar.propTypes = {
//     auth: React.PropTypes.object.isRequired,
//     logout: React.PropTypes.func.isRequired
// }

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps)(NavBar);