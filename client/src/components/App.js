import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import CandidateView from './candidate-view';
import RegistrationPage from './registration-page';
import TeamPage from './team-page';
import './App.css';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route component={Header} />

        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/candidate' component={CandidateView} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/team-page' component={TeamPage} />
      </div>
    );
  }
}
