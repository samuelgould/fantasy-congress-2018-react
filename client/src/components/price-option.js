import React from 'react';
import { connect } from 'react-redux';
import { filterCandidatesByPrice } from '../actions/candidates';

export function PriceOption(props) {
    
    const onChange = function(price){
        props.dispatch(filterCandidatesByPrice(price));
    }
    
    return (
        <select name="price" onChange={e => onChange(e.target.value)}>
            <option value="any">Price: Any</option>
            <option value="5">{"<"} $5</option>
            <option value="10">{"<"} $10</option>
            <option value="15">{"<"} $15</option>
            <option value="20">{"<"} $20</option>
        </select>
    )
}

export default connect()(PriceOption)