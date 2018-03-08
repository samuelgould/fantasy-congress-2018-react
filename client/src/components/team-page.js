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
		let budget = this.props.budget;
		
		const senateTeamMembersStyling = [
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview'
		];
		const houseTeamMembersStyling = [
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview',
			'candidate-box empty-preview'
		];

		for (let i=0; i<senate.length; i++) {
			budget = budget - senate[i].candidate_id.price;
			
			if (senate[i].candidate_id.party === 'D') {
				senateTeamMembersStyling[i] = 'candidate-box democrat-preview';
			} else if (senate[i].candidate_id.party === 'R') {
				senateTeamMembersStyling[i] = 'candidate-box republican-preview';
			} else {
				senateTeamMembersStyling[i] = 'candidate-box independent-preview';
			}
		}

		for (let i=0; i<house.length; i++) {
			budget = budget - house[i].candidate_id.price;
			
			if (house[i].candidate_id.party === 'D') {
				houseTeamMembersStyling[i] = 'candidate-box democrat-preview';
			} else if (house[i].candidate_id.party === 'R') {
				houseTeamMembersStyling[i] = 'candidate-box republican-preview';
			} else {
				houseTeamMembersStyling[i] = 'candidate-box independent-preview';
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

		let teamMembers = 'desktop';
		let managerInformation = 'manager desktop';
		let teamHeaderStyling ='team-header mobile-preview';
		let budgetStyling = 'budget mobile-preview';
		let teamNameStyling = 'team-name mobile-preview';

		if (this.props.teamVisible) {
			teamMembers = 'team-members-visible';
			teamHeaderStyling = 'team-header'
			managerInformation = 'manager';
			budgetStyling = 'budget';
			teamNameStyling = 'team-name';
		}

		return (
			<div className="team-page">
				<div className="team-information-container">
					<h2 className={teamHeaderStyling}>
						<div className={teamNameStyling}>{user.teamName}</div> 
						<div className={managerInformation}>managed by: {user.username}</div>
						{/* <div className="submit-button-container">
							{button}
						</div> */}
					</h2>
					<div className={budgetStyling}>
						Remaining Budget: <span className={budgetValue}>${budget}</span>
					</div>
					<div className="team-preview mobile-only">
						<div className="senate candidate-preview-container">
							<p>Senate: </p>
							<p className={senateTeamMembersStyling[0]}></p>
							<p className={senateTeamMembersStyling[1]}></p>
							<p className={senateTeamMembersStyling[2]}></p>
							<p className={senateTeamMembersStyling[3]}></p>
						</div>
						<div className="house candidate-preview-container">
							<p>House: </p>
							<p className={houseTeamMembersStyling[0]}></p>
							<p className={houseTeamMembersStyling[1]}></p>
							<p className={houseTeamMembersStyling[2]}></p>
							<p className={houseTeamMembersStyling[3]}></p>
							<p className={houseTeamMembersStyling[4]}></p>
							<p className={houseTeamMembersStyling[5]}></p>
							<p className={houseTeamMembersStyling[6]}></p>
							<p className={houseTeamMembersStyling[7]}></p>
						</div> 
					</div>
				</div>
				<div className={teamMembers}>
					<h3 className="chamber header">
						SENATE
					</h3>
					<SenateTeamMembers />
					<h3 className="chamber header">
						HOUSE OF REPRESENTATIVES
					</h3>
					<HouseTeamMembers />
				</div>
      		</div>
		)
	}
};

const mapStateToProps = state => ({
	user: state.user.user,
	teamVisible: state.user.teamVisible,
	senate: state.user.user.senate || [],
	house: state.user.user.house || [],
	budget: state.user.user.budget || 200
})

export default connect(mapStateToProps)(TeamPage);