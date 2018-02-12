import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/candidates';
import './candidates.css';

export class Candidates extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCandidates());
	}

	filterCandidates() {
		return this.props.candidates.filter(candidate => 
			(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1))
	}

	render() {
		const filteredCandidates = this.filterCandidates();
		const candidates = filteredCandidates.map( candidate => {
			return (
				<li className="js-candidate-id-element" key={candidate._id}>
					<div className="candidate-container">
						<div className="candidate-information">
							<img className="candidate-headshot" src={candidate.image} alt="candidate headshot" />
							<div className="candidate-stats">
								<div className="candidate-name">{candidate.name} ({candidate.party})</div>
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
	candidates: state.candidates,
	searchString: state.searchString
})

export default connect(mapStateToProps)(Candidates);