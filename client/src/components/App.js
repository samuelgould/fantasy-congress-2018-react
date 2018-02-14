import React from 'react';
import './App.css';
import FilterOptions from './filter-options';
import Candidates from './candidates';
import TeamPage from './team-page';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/candidates-list' component={FilterOptions} />
        <Route exact path='/candidates-list' component={Candidates} />
        <Route path='/' component={TeamPage} />
      </div>
    );
  }
}
