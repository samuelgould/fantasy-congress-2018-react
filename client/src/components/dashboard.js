import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import FilterOptions from './filter-options';
import Candidates from './candidates';
import TeamPage from './team-page';
import './dashboard.css';

export class Dashboard extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <div className="search">
                    <FilterOptions />
                    <Candidates />
                </div>
                <TeamPage />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));