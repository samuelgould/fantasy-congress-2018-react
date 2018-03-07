import React from 'react';
import { connect } from 'react-redux';
import { searchCandidates } from '../actions/candidates';
import './search-bar.css';

export function SearchBar(props) {
    
    const onChange = function(searchString) {
        props.dispatch(searchCandidates(searchString));
    };
    
    return (
        <form className="search-bar">
            <label htmlFor="search-bar">Search: </label>
            <input className="candidate-name-input-search-bar" id="search-bar" type="text" placeholder="e.g. Randy Bryce" onChange={e => onChange(e.target.value)}></input>
        </form>
    )
}

export default connect()(SearchBar)