import React from 'react';
import { connect } from 'react-redux';
import { filterOnlyAffordable } from '../actions/candidates';

export function AffordableOnly(props) {
    
    const onClick = function(){
			const checkbox = document.getElementById('affordable');
			props.dispatch(filterOnlyAffordable(checkbox.checked));
    }
    
    return (
      <div>
        <input id="affordable" type="checkbox" onClick={() => onClick()}></input>
				<label htmlFor="affordable">Affordable</label>
			</div>
    )
}

export default connect()(AffordableOnly)