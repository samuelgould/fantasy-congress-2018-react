import React from 'react';
import SearchBar from './search-bar';
import ChamberOption from './chamber-option';
import PartyOption from './party-option';
import StateOption from './state-option';
import IncumbentOnly from './incumbent-checkbox';

export default function FilterOptions() {
    return (
        <div>
            <SearchBar />
            <ChamberOption />
            <PartyOption />
            <StateOption />
            <IncumbentOnly />
        </div>
    )
}