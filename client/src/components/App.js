import React from 'react';
import './App.css';
import Candidate from './candidates';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Candidate />
      </div>
    );
  }
}
