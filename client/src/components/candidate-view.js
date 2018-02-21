import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import TeamPage from './team-page';
import { addCandidate } from '../actions/user';
import './candidate-view.css';

export class CandidateView extends React.Component {
    render() {
        const candidate = this.props.candidate;
        const senate = this.props.senate;
		const house = this.props.house;
        
        let budget = this.props.budget;
        let individualCandidate;

        if (!candidate) {
            individualCandidate = <div></div>
        }
        else {
            for (let i=0; i<senate.length; i++) {
                budget = budget - senate[i].candidate_id.price;
            }
    
            for (let i=0; i<house.length; i++) {
                budget = budget - house[i].candidate_id.price;
            }
    
            let button;

            if (senate.length < 4 && candidate.chamber === 'Senate') {
                button = <button value={candidate._id} onClick={ event => this.props.dispatch(addCandidate(event.currentTarget.value, 'senate')) }>Add</button>
                for (let i=0; i<senate.length; i++){
                    if (candidate._id === senate[i].candidate_id._id) {
                        button = <div className="hide"></div>
                    }
                }
            }

            if (house.length < 8 && candidate.chamber === 'House') {
                button = <button value={candidate._id} onClick={ event => this.props.dispatch(addCandidate(event.currentTarget.value, 'house')) }>Add</button>
                for (let i=0; i<house.length; i++){
                    if (candidate._id === house[i].candidate_id._id) {
                        button = <div className="hide"></div>
                    }
                }
            }
            
            let affordibility = 'price-affordable';
    
            if (candidate.price > budget) {
                affordibility = 'price-too-expensive';
            }
            
            individualCandidate = 
                <div className="individual-candidate-container">
                    <div className="individual-candidate-information">
                        {/* <img className="candidate-headshot" src={candidate.image} alt="candidate headshot" /> */}
                        <div className="candidate-stats">
                            <div className="individual-candidate-name">{candidate.name} ({candidate.party})</div>
                            <div className="candidate-congress-info">{candidate.chamber}: {candidate.state} {candidate.district}</div>
                        </div>
                        <div className="adding-candidate">
                            <div className={affordibility}>${candidate.price}</div>
                            {button}
                        </div>
                    </div>
                </div>
        }

        return (
            <div className="candidate-view">
                {individualCandidate}
                <TeamPage />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        candidate: state.candidates.candidate,
        senate: state.user.user.senate || [],
        house: state.user.user.house || [],
        budget: state.user.user.budget
    };
};

export default requiresLogin()(connect(mapStateToProps)(CandidateView));