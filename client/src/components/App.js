import React from 'react';
import './App.css';
import Candidates from './candidates';
import SearchBar from './search-bar';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Candidates />
      </div>
    );
  }
}
