import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/candidates';
import './candidates.css';

export class Candidates extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCandidates());
	}

	render() {
		const candidates = this.props.candidates.map( candidate => {
			return (
				<li className="js-candidate-id-element" key={candidate._id}>
					<div className="candidate-container">
						<div className="candidate-information">
							<img className="candidate-headshot" src={candidate.image} alt="candidate headshot" />
							<div className="candidate-stats">
								<div className="candidate-name">{candidate.firstName} {candidate.lastName} ({candidate.party})</div>
								<div className="candidate-congress-info">{candidate.chamber}: {candidate.state} {candidate.district}</div>
							</div>
						</div>
						<div className="candidate-price">${candidate.price}</div>
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
	candidates: state.candidates
})

export default connect(mapStateToProps)(Candidates);