import React from 'react';
import './App.css';
import Candidates from './candidates';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Candidates />
      </div>
    );
  }
}
