import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleMenuVisibility, displayTeamView, displayCandidateSearchView } from '../actions/user';
import requiresLogin from './requires-login';
import FilterOptions from './filter-options';
import Candidates from './candidates';
import TeamPage from './team-page';
import TeamPreview from './team-preview';
import './dashboard.css';

export class Dashboard extends React.Component {
    logOut() {
        this.props.dispatch(toggleMenuVisibility());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    
    render() {
        let candidatesSearch = 'search desktop';
        let teamPage = 'team-page-container desktop';
        let menu;
        let teamPreview = (
            <div className='team-preview-container'>
                <TeamPreview />
            </div>
        )

        if (this.props.candidatesVisible) {
            candidatesSearch = 'search mobile-focus';
        }

        if (this.props.teamVisible) {
            teamPage = 'team-page-container mobile-focus';
            teamPreview = (
                <div className='mobile-only'></div>
            );
        }

        if (this.props.menuVisible) {
            menu = (
                <div className="menu-display">
                    <h2 className="menu-item menu-header">MENU</h2>
                    <Link to="/dashboard" className="menu-item" onClick={() => this.props.dispatch(displayCandidateSearchView())}>
                        Candidate Search
                    </Link>
                    <Link to="/team-page" className="menu-item" onClick={() => this.props.dispatch(displayTeamView())}>
                        Team Page
                    </Link>
                    <Link to="/" className="menu-item" onClick={() => this.logOut()}>
                        Log Out
                    </Link>
                </div>
            );
        }
        
        return (
            <div className="dashboard">
                {teamPreview}
                <div className={candidatesSearch}>
                    <FilterOptions />
                    <Candidates />
                    <a className="icon-credit" href="https://icons8.com">Icon pack by Icons8</a>
                </div>
                <div className={teamPage}>
                    <TeamPage />
                </div>
                {menu}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        candidatesVisible: state.user.candidatesVisible,
        teamVisible: state.user.teamVisible,
        menuVisible: state.user.menuVisible
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));