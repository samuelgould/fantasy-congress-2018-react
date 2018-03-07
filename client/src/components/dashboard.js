import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import FilterOptions from './filter-options';
import Candidates from './candidates';
import TeamPage from './team-page';
import './dashboard.css';

export class Dashboard extends React.Component {

    
    render() {
        let candidatesSearch;
        let teamPage;

        if (this.props.candidatesVisible) {
            candidatesSearch = (
                <div className="search">
                    <FilterOptions />
                    <Candidates />
                    <a className="icon-credit" href="https://icons8.com">Icon pack by Icons8</a>
                </div>
            )
        }

        if (this.props.teamVisible) {
            teamPage = (
                <TeamPage />
            )
        }
        
        return (
            <div className="dashboard">
                {candidatesSearch}
                {teamPage}
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
        teamVisible: state.user.teamVisible
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));