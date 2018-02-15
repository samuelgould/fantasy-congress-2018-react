import React from 'react';
import { connect } from 'react-redux';
import { filterCandidatesByParty } from '../actions/candidates';

export function PartyOption(props) {
    
    const onChange = function(party){
        props.dispatch(filterCandidatesByParty(party));
    }
    
    return (
        <select name="party" onChange={e => onChange(e.target.value)}>
            <option value="all">Party: All</option>
            <option value="D">Democrat</option>
            <option value="R">Republican</option>
            <option value="I">Independent</option>
        </select>
    )
}

export default connect()(PartyOption)