import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import { toggleMenuVisibility, displayCandidateSearchView } from '../actions/user';
import './header.css';

export class Header extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        let logOutButton;
        let hamburgerIcon;
        let logo = 'fantasy-congress-2018-logo';
        let header = 'header-box landing-page';

        if (this.props.loggedIn) {
            logOutButton = (
                <button className="desktop" id="logout-button" onClick={() => this.logOut()}>Log out</button>
            );
            logo = 'fantasy-congress-2018-logo-thumbnail';
            header = 'header-box header-logged-in';
            let hamburgerClass = 'hamburger mobile';

            if (this.props.menuVisible) {
                hamburgerClass = 'hamburger mobile menu-visible'
            }

            hamburgerIcon = (
                <div className={hamburgerClass} onClick={() => this.props.dispatch(toggleMenuVisibility())}>
                    <div className="hamburger-stripe top-stripe"></div>
                    <div className="hamburger-stripe middle-stripe"></div>
                    <div className="hamburger-stripe bottom-stripe"></div>
                </div>
            );
        }
        return (
            <div className={header}>
                <Link to='/dashboard' onClick={() => this.props.dispatch(displayCandidateSearchView())}>
                    <img id={logo} src="https://i.imgur.com/rcKFcKC.png" alt="Fantasy Congress 2018 Logo" />
                </Link>
                {logOutButton}
                {hamburgerIcon}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    menuVisible: state.user.menuVisible
});

export default connect(mapStateToProps)(Header);
