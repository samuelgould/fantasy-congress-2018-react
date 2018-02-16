import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './header.css';

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        let logo = 'fantasy-congress-2018-logo'
        let header = 'header-box landing-page'

        if (this.props.loggedIn) {
            logOutButton = (
                <button id="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
            logo = 'fantasy-congress-2018-logo-thumbnail';
            header = 'header-box logged-in'
        }
        return (
            <div className={header}>
                <img id={logo} src="https://i.imgur.com/rcKFcKC.png" alt="Fantasy Congress 2018 Logo" />
                {logOutButton}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Header);
