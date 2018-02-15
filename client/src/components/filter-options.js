import React from 'react';
import SearchBar from './search-bar';
import ChamberOption from './chamber-option';
import PartyOption from './party-option';
import StateOption from './state-option';
import IncumbentOnly from './incumbent-checkbox';
import './filter-options.css';

export default function FilterOptions() {
    return (
        <div className="sorting-options">
            <SearchBar />
            <div className="filters">
                <div>
                    <PartyOption />
                </div>
                <div>  
                    <ChamberOption />                   
                </div> 
                <div>
                    <StateOption />
                </div>
                <IncumbentOnly />
            </div>
        </div>
    )
}