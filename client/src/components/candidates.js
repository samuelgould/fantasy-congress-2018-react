import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/candidates';
import './candidates.css';

export class Candidates extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCandidates());
	}

	filterCandidates() {
		if (!this.props.incumbent) {
			if (this.props.chamber === 'both' && this.props.party === 'all' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1))
			} else if (this.props.chamber === 'both' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.party === this.props.party)
				)
			} else if (this.props.party === 'all' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber)
				)
			} else if (this.props.chamber === 'both' && this.props.party === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.state === this.props.state)
				)
			} else if (this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.party === this.props.party)
				)
			} else if (this.props.party === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.state === this.props.state)
				)
			} else if (this.props.chamber === 'both') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.state === this.props.state) &&
					(candidate.party === this.props.party)
				)
			} else {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.party === this.props.party) &&
					(candidate.state === this.props.state)
				)}
		} else {
			if (this.props.chamber === 'both' && this.props.party === 'all' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.chamber === 'both' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.party === this.props.party) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.party === 'all' && this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.chamber === 'both' && this.props.party === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.state === this.props.state) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.state === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.party === this.props.party) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.party === 'all') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.state === this.props.state) &&
					(candidate.incumbent === true)
				)
			} else if (this.props.chamber === 'both') {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.state === this.props.state) &&
					(candidate.party === this.props.party) &&
					(candidate.incumbent === true)
				)
			} else {
				return this.props.candidates.filter(candidate => 
					(candidate.name.toLowerCase().indexOf(this.props.searchString.toLowerCase()) > -1) &&
					(candidate.chamber.toLowerCase() === this.props.chamber) &&
					(candidate.party === this.props.party) &&
					(candidate.state === this.props.state) &&
					(candidate.incumbent === true)
				)}
			}
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
	searchString: state.searchString,
	chamber: state.chamber,
	party: state.party,
	state: state.state,
	incumbent: state.incumbent
})

export default connect(mapStateToProps)(Candidates);