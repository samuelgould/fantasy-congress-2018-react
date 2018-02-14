import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/candidates';
import { addHouseCandidate } from '../actions/user';
import './candidates.css';

export class Candidates extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCandidates());
	}

	render() {
		let candidates = this.props.candidates;
		let senate = this.props.senate;
		let house = this.props.house;
		
		for (let i=0; i<senate.length; i++){
			candidates = candidates.filter(candidate => candidate._id !== senate[i].candidate_id._id);
		}

		for (let i=0; i<house.length; i++){
			candidates = candidates.filter(candidate => candidate._id !== house[i].candidate_id._id);
		}

		if (this.props.incumbent) {
			candidates = candidates.filter(candidate => candidate.incumbent === true)
		} if (this.props.chamber !== 'both') {
			candidates = candidates.filter(candidate => candidate.chamber.toLowerCase() === this.props.chamber)
		} if (this.props.state !== 'all') {
			candidates = candidates.filter(candidate => candidate.state === this.props.state)
		} if (this.props.party !== 'all') {
			candidates = candidates.filter(candidate => candidate.party === this.props.party)
		} if (this.props.searchString !== '') {
			candidates = candidates.filter(candidate => candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1)
		}

		candidates = candidates.map( candidate => {
			return (
				<li key={candidate._id}>
					<div className="candidate-container">
						<div className="candidate-information">
							<img className="candidate-headshot" src={candidate.image} alt="candidate headshot" />
							<div className="candidate-stats">
								<div className="candidate-name">{candidate.name} ({candidate.party})</div>
								<div className="candidate-congress-info">{candidate.chamber}: {candidate.state} {candidate.district}</div>
							</div>
						</div>
						<div className="adding-candidate">
							<div className="candidate-price">${candidate.price}</div>
							<button value={candidate._id} onClick={ event => this.props.dispatch(addHouseCandidate(event.currentTarget.value)) }>Add to Team</button>
						</div>
					</div>
			  </li>
			)
		})
		
		return (
			<ul>
				{candidates}
			</ul>
		)
	}
};

const mapStateToProps = state => ({
	candidates: state.candidates.candidates,
	searchString: state.candidates.searchString,
	chamber: state.candidates.chamber,
	party: state.candidates.party,
	state: state.candidates.state,
	incumbent: state.candidates.incumbent,
	senate: state.user.user.senate || [],
	house: state.user.user.house || []
})

export default connect(mapStateToProps)(Candidates);