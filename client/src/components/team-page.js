import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';
import SenateTeamMembers from './senate-team-members';
import HouseTeamMembers from './house-team-members';

export class TeamPage extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchUser());
	}

	render() {
        const user = this.props.user;

		return (
			<div>
                {user.teamName} managed by: {user.username}
                <SenateTeamMembers />
                <HouseTeamMembers />
            </div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.user.user,
})

export default connect(mapStateToProps)(TeamPage);