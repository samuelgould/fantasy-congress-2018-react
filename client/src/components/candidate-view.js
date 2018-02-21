import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import TeamPage from './team-page';
import './candidate-view.css';

export class CandidateView extends React.Component {

    
    render() {
        return (
            <div className="candidate-view">
                <div>
                    Test
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

export default requiresLogin()(connect(mapStateToProps)(CandidateView));