import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header';
import LandingPage from './landing-page';
import Dashboard from './dashboard';
import RegistrationPage from './registration-page';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route component={Header} />

        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={RegistrationPage} />
      </div>
    );
  }
}
