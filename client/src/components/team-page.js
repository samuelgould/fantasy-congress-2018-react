import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';

export class TeamPage extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchUser());
	}

	render() {
        const user = this.props.user;

		return (
			<div>
                {user.teamName} managed by: {user.username}
            </div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.user.user,
})

export default connect(mapStateToProps)(TeamPage);