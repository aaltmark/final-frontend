import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import UserContainer from './Containers/UserContainer'
import InstructorContainer from './Containers/InstructorContainer'
import ResortContainer from './Containers/ResortContainer'
import SearchContainer from './Containers/SearchContainer'



class App extends React.Component {
  render(){
    return (
        <>
          <Navbar />
          <Switch>
            <Route path="/search" render={routerProps => <SearchContainer {...routerProps} />} />
            <Route path="/resorts" render={routerProps => <ResortContainer {...routerProps} /> } />
            <Route path="/instructors" render={routerProps => <InstructorContainer {...routerProps} />} />
            <Route path="/users" render={routerProps => <UserContainer {...routerProps} /> } />
            <Route path="/" render={() => <Home />} />
          </Switch>
          
        </>
    );
  }
}

export default withRouter(App);
