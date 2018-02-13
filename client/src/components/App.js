import React from 'react';
import './App.css';
import FilterOptions from './filter-options';
import Candidates from './candidates';
import TeamPage from './team-page';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FilterOptions />
        <Candidates />
        <TeamPage />
      </div>
    );
  }
}
