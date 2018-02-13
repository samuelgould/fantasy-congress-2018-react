import React from 'react';
import { connect } from 'react-redux';
import { filterCandidatesByChamber } from '../actions/candidates';

export function ChamberOption(props) {
    
    const onChange = function(chamber){
        props.dispatch(filterCandidatesByChamber(chamber));
    }
    
    return (
        <select name="chamber" onChange={e => onChange(e.target.value)}>
            <option value="both">Both</option>
            <option value="senate">Senate</option>
            <option value="house">House</option>
        </select>
    )
}

export default connect()(ChamberOption)