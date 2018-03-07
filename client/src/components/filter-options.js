import React from 'react';
import { connect } from 'react-redux';
import { toggleFilters } from '../actions/candidates';
import SearchBar from './search-bar';
import ChamberOption from './chamber-option';
import PartyOption from './party-option';
import StateOption from './state-option';
import IncumbentOnly from './incumbent-checkbox';
import AffordableOnly from './affordable-checkbox';
import PriceOption from './price-option';
import './filter-options.css';

export function FilterOptions(props) {    
        
    let showFilters = 'filters-holder';
        if (!props.filters) {
            showFilters = 'no-filters';
        }

        const onClick = function(){
            props.dispatch(toggleFilters());
        }

        return (
            <div className="sorting-options">
                <div className="sorting-header">
                    <SearchBar />
                    <input onClick={() => onClick()} type="image" className="filter-icon" name="showFilters" id="showFilters" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJFSURBVGhD7ZkxSBxBFIYvCQhJYYpgISikEGIRCwlWKWzEmJs9FYmWsUmTIlimCZyl4O2MYmWRJpgUlhbpUgTBRisxpNDOzioQgu7MsZv3wjsI7jvv1Nu9dzof/M3dznv/z869WfYKHsko7X4ExiXipW2stF0g22nYRUKljP1MttNwC6TqdgSB38gOt0iilKm+JttpptfiR3DR/vlF0qSMWyTL9Xmh41648JArIELaGbLamClz+hhG3DFbqJ3S7mMhSe6QzeYIKmeDEOaELdgOabs5u5ncI3uXY7ISDQfG/mIL5yg4/L7OlpMusnU1Sto+h0J/uAa5SLvvwXrygOxcDyg2DnM7Yhtlq92xpeQh2WgNReNm4M5UmWaZCCbnwcRq3EPtW4vS1Xl8YOMat1TaHUGIPmqbDUVt37HNWyUY+6XwdIDaZQtMsg+siesKxr1aiZ5Sm3yAPbzMmrmyYMyv2BEqnyNwwoKB9bShy+vfeA/tKFXOHzxpwcQXzlyzwrGuQlekku0DT1wws8WZbCQc5yVdnaNS7QdPXgjzjTNbVzjGdfSGSsgB5n43hPkEZ8BeQ8GJDde+paWeTHgVxvfVqn3WrCbN2RNaKouXYTSU+h1cIKXdNi2VhQ8iDR9EGj6INHwQafgg0vBBpHFjguBjOWe4nsQGKZeTu4GxG5xpTmKD1ACDY8q4n5z5/yU+CIJvVorGvlfa/uZCoDoiSI2pStyP/zR1fJAa3HbryCDI+e2G78Hoq84Etxu+AMe7RB95biCFwl+Rj15qzQ2sQwAAAABJRU5ErkJggg==" alt="filter icon" />
                </div>
                <div className={showFilters}>
                    <div className="filter-container desktop-filters-container">
                        <PartyOption />
                        <StateOption />                  
                        <IncumbentOnly />
                    </div>
                    <div className="filter-container desktop-filters-container">
                        <ChamberOption /> 
                        <PriceOption />
                        <AffordableOnly />
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = state => ({
        filters: state.candidates.filters
})

export default connect(mapStateToProps)(FilterOptions);