import React from 'react';
import { connect } from 'react-redux';
import { fetchCandidates } from '../actions/candidates';

export class Candidates extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchCandidates());
	}

	render() {
		const candidates = this.props.candidates.map( (candidate, index) => 
			<li key={index}>{candidate.firstName} {candidate.lastName}</li>
		)
		
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