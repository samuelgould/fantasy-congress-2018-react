import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, displayTeamView } from '../actions/user';
import './team-preview.css';

export class TeamPage extends React.Component {
	componentDidMount() {
        this.props.dispatch(fetchUser());
	}

	render() {

		const user = this.props.user;
		const senate = this.props.senate;
		const house = this.props.house;
		let budget = this.props.budget;
		
		const senateTeamMembersStyling = [];
		const houseTeamMembersStyling = [];

		for (let i = 0; i < 4; i++) {
            if (senate[i]) {
                budget = budget - senate[i].candidate_id.price;
			
                if (senate[i].candidate_id.party === 'D') {
                    senateTeamMembersStyling[i] = 'candidate-box democrat-preview';
                } else if (senate[i].candidate_id.party === 'R') {
                    senateTeamMembersStyling[i] = 'candidate-box republican-preview';
                } else {
                    senateTeamMembersStyling[i] = 'candidate-box independent-preview';
                }
            } else {
                senateTeamMembersStyling[i] = 'candidate-box empty-preview';
            }
		}

		for (let i = 0; i < 8; i++) {
            if (house[i]) {
                budget = budget - house[i].candidate_id.price;
			
                if (house[i].candidate_id.party === 'D') {
                    houseTeamMembersStyling[i] = 'candidate-box democrat-preview';
                } else if (house[i].candidate_id.party === 'R') {
                    houseTeamMembersStyling[i] = 'candidate-box republican-preview';
                } else {
                    houseTeamMembersStyling[i] = 'candidate-box independent-preview';
                }
            } else {
                houseTeamMembersStyling[i] = 'candidate-box empty-preview';
            }
		}

		let budgetValue = 'exact';
		if (budget < 0) {
			budgetValue = 'overbudget'
		} if (budget > 0) {
			budgetValue = 'underbudget'
		}

		return (
			<div className='team-preview team-information-preview-container mobile-only'>
				<Link to='/team-page' className='team-page-link'>
					<div className='mobile-preview team-name-link' onClick={() => this.props.dispatch(displayTeamView())}>
						Team Name: <span className='team-name-text'>{user.teamName}</span>
					</div>
				</Link>
				<div className='mobile-preview'>
					Remaining Budget: <span className={budgetValue}>${budget}</span>
				</div>
				<div className='team-preview'>
					<div className='senate candidate-preview-container'>
						<p>Senate: </p>
						<p className={senateTeamMembersStyling[0]}></p>
						<p className={senateTeamMembersStyling[1]}></p>
						<p className={senateTeamMembersStyling[2]}></p>
						<p className={senateTeamMembersStyling[3]}></p>
					</div>
					<div className='house candidate-preview-container'>
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