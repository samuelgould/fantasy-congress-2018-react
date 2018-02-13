import React from 'react';
import { connect } from 'react-redux';
import { filterOnlyShowIncumbents } from '../actions/candidates';

export function IncumbentOnly(props) {
    
    const onClick = function(){
			const checkbox = document.getElementById('incumbent');
			props.dispatch(filterOnlyShowIncumbents(checkbox.checked));
    }
    
    return (
      <div>
        <input id="incumbent" type="checkbox" onClick={() => onClick()}></input>
				<label htmlFor="incumbent">Incumbent</label>
			</div>
    )
}

export default connect()(IncumbentOnly)