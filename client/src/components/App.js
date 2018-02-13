import React from 'react';
import './App.css';
import Candidates from './candidates';
import SearchBar from './search-bar';
import ChamberOption from './chamber-option';
import PartyOption from './party-option';
import StateOption from './state-option';
import IncumbentOnly from './incumbent-checkbox';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <ChamberOption />
        <PartyOption />
        <StateOption />
        <IncumbentOnly />
        <Candidates />
      </div>
    );
  }
}
