import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/user';
import SenateTeamMembers from './senate-team-members';
import HouseTeamMembers from './house-team-members';
import './team-page.css';

export class TeamPage extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchUser());
	}

	render() {
				const user = this.props.user;
				const senate = this.props.senate;
				const house = this.props.house;
				
				let budget = 200;
				if (senate[0]){
					for (let i=0; i<senate.length; i++) {
						budget = budget - senate[i].candidate_id.price;
					}
				} if (house[0]){
					for (let i=0; i<house.length; i++) {
						budget = budget - house[i].candidate_id.price;
					}
				}

				let budgetValue = 'exact';
				if (budget < 0) {
					budgetValue = 'overbudget'
				} if (budget > 0) {
					budgetValue = 'underbudget'
				}

				let button;
				if (senate.length === 4 && house.length === 8 && budget >= 0) {
					button = <button className="submit-button" onClick={ event => console.log('Team Submitted') }>Submit Roster</button>
				}

		return (
			<div className="team-page">
				<h2 className="team header">
					<div className="team-name">{user.teamName}</div> 
					<div className="manager">managed by: {user.username}</div>
					<div className="submit-button-container">
						{button}
					</div>
				</h2>
				<div className="budget">
					Remaining Budget: <span className={budgetValue}>${budget}</span>
				</div>
				
				<h3 className="chamber header">
					SENATE
				</h3>
				<SenateTeamMembers />
				<h3 className="chamber header">
					HOUSE OF REPRESENTATIVES
				</h3>
    			<HouseTeamMembers />
      		</div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.user.user,
	senate: state.user.user.senate || [],
	house: state.user.user.house || []
})

export default connect(mapStateToProps)(TeamPage);