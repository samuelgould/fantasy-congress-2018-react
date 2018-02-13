import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';

export class TeamPage extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchUser());
	}

	render() {
        const user = 'Hello World';
        console.log(this.props);
		
		return (
			<div>
                {user}
            </div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.user,
})

export default connect(mapStateToProps)(TeamPage);