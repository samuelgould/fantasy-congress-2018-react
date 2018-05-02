import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleMenuVisibility, displayTeamView, displayCandidateSearchView } from '../actions/user';
import './menu.css';

export class Menu extends React.Component {
    logOut() {
        this.props.dispatch(toggleMenuVisibility());
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        return (
            <div className="menu-display">
                <div className='menu-content'>
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
            </div>
        )
    }
}

export default requiresLogin()(connect()(Menu));