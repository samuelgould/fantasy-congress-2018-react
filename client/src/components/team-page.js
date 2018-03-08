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

		let senateCandidatePreviewBox1 = 'candidate-box empty-preview';
		let senateCandidatePreviewBox2 = 'candidate-box empty-preview';
		let senateCandidatePreviewBox3 = 'candidate-box empty-preview';
		let senateCandidatePreviewBox4 = 'candidate-box empty-preview';

		if (senate[0]) {
			if (senate[0].candidate_id.party === 'D') {
				senateCandidatePreviewBox1 = 'candidate-box democrat-preview';
			} else if (senate[0].candidate_id.party === 'R') {
				senateCandidatePreviewBox1 = 'candidate-box republican-preview';
			} else {
				senateCandidatePreviewBox1 = 'candidate-box independent-preview';
			}
		}

		if (senate[1]) {
			if (senate[1].candidate_id.party === 'D') {
				senateCandidatePreviewBox2 = 'candidate-box democrat-preview';
			} else if (senate[1].candidate_id.party === 'R') {
				senateCandidatePreviewBox2 = 'candidate-box republican-preview';
			} else {
				senateCandidatePreviewBox2 = 'candidate-box independent-preview';
			}
		}

		if (senate[2]) {
			if (senate[2].candidate_id.party === 'D') {
				senateCandidatePreviewBox3 = 'candidate-box democrat-preview';
			} else if (senate[2].candidate_id.party === 'R') {
				senateCandidatePreviewBox3 = 'candidate-box republican-preview';
			} else {
				senateCandidatePreviewBox3 = 'candidate-box independent-preview';
			}
		}

		if (senate[3]) {
			if (senate[3].candidate_id.party === 'D') {
				senateCandidatePreviewBox4 = 'candidate-box democrat-preview';
			} else if (senate[3].candidate_id.party === 'R') {
				senateCandidatePreviewBox4 = 'candidate-box republican-preview';
			} else {
				senateCandidatePreviewBox4 = 'candidate-box independent-preview';
			}
		}

		let houseCandidatePreviewBox1 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox2 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox3 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox4 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox5 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox6 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox7 = 'candidate-box empty-preview';
		let houseCandidatePreviewBox8 = 'candidate-box empty-preview';
		
		if (house[0]) {
			if (house[0].candidate_id.party === 'D') {
				houseCandidatePreviewBox1 = 'candidate-box democrat-preview';
			} else if (house[0].candidate_id.party === 'R') {
				houseCandidatePreviewBox1 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox1 = 'candidate-box independent-preview';
			}
		}

		if (house[1]) {
			if (house[1].candidate_id.party === 'D') {
				houseCandidatePreviewBox2 = 'candidate-box democrat-preview';
			} else if (house[1].candidate_id.party === 'R') {
				houseCandidatePreviewBox2 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox2 = 'candidate-box independent-preview';
			}
		}

		if (house[2]) {
			if (house[2].candidate_id.party === 'D') {
				houseCandidatePreviewBox3 = 'candidate-box democrat-preview';
			} else if (house[2].candidate_id.party === 'R') {
				houseCandidatePreviewBox3 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox3 = 'candidate-box independent-preview';
			}
		}

		if (house[3]) {
			if (house[3].candidate_id.party === 'D') {
				houseCandidatePreviewBox4 = 'candidate-box democrat-preview';
			} else if (house[3].candidate_id.party === 'R') {
				houseCandidatePreviewBox4 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox4 = 'candidate-box independent-preview';
			}
		}

		if (house[4]) {
			if (house[4].candidate_id.party === 'D') {
				houseCandidatePreviewBox5 = 'candidate-box democrat-preview';
			} else if (house[4].candidate_id.party === 'R') {
				houseCandidatePreviewBox5 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox5 = 'candidate-box independent-preview';
			}
		}

		if (house[5]) {
			if (house[5].candidate_id.party === 'D') {
				houseCandidatePreviewBox6 = 'candidate-box democrat-preview';
			} else if (house[5].candidate_id.party === 'R') {
				houseCandidatePreviewBox6 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox6 = 'candidate-box independent-preview';
			}
		}

		if (house[6]) {
			if (house[6].candidate_id.party === 'D') {
				houseCandidatePreviewBox7 = 'candidate-box democrat-preview';
			} else if (house[6].candidate_id.party === 'R') {
				houseCandidatePreviewBox7 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox7 = 'candidate-box independent-preview';
			}
		}

		if (house[7]) {
			if (house[7].candidate_id.party === 'D') {
				houseCandidatePreviewBox8 = 'candidate-box democrat-preview';
			} else if (house[7].candidate_id.party === 'R') {
				houseCandidatePreviewBox8 = 'candidate-box republican-preview';
			} else {
				houseCandidatePreviewBox8 = 'candidate-box independent-preview';
			}
		}
		

		for (let i=0; i<senate.length; i++) {
			budget = budget - senate[i].candidate_id.price;
		}

		for (let i=0; i<house.length; i++) {
			budget = budget - house[i].candidate_id.price;
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
							<p className={senateCandidatePreviewBox1}></p>
							<p className={senateCandidatePreviewBox2}></p>
							<p className={senateCandidatePreviewBox3}></p>
							<p className={senateCandidatePreviewBox4}></p>
						</div>
						<div className="house candidate-preview-container">
							<p>House: </p>
							<p className={houseCandidatePreviewBox1}></p>
							<p className={houseCandidatePreviewBox2}></p>
							<p className={houseCandidatePreviewBox3}></p>
							<p className={houseCandidatePreviewBox4}></p>
							<p className={houseCandidatePreviewBox5}></p>
							<p className={houseCandidatePreviewBox6}></p>
							<p className={houseCandidatePreviewBox7}></p>
							<p className={houseCandidatePreviewBox8}></p>
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