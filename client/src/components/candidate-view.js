import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import Menu from './menu';
import TeamPage from './team-page';
import TeamPreview from './team-preview';
import TwitterTimeline from './twitter-timeline';
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

            let party;

            if (candidate.party === 'D') {
                party = 'Democrat';
            } else if (candidate.party === 'R') {
                party = 'Republican';
            } else {
                party = 'Independent';
            }

            let chamber;

            if (candidate.chamber === 'Senate') {
                chamber = 'Senate';
            } else {
                chamber = 'House of Representatives';
            }

            let district;

            if (!candidate.district) {
                district = '';
            } else if (candidate.district === 1 || candidate.district === 21 || candidate.district === 31 || candidate.district === 41 || candidate.district === 51) {
                district = candidate.district + 'st';
            } else if (candidate.district === 2 || candidate.district === 22 || candidate.district === 32 || candidate.district === 42 || candidate.district === 52) {
                district = candidate.district + 'nd';
            } else if (candidate.district === 3 || candidate.district === 23 || candidate.district === 33 || candidate.district === 43 || candidate.district === 53) {
                district = candidate.district + 'rd';
            } else {
                district = candidate.district + 'th';
            }

            let affordibility = 'price-affordable';
    
            if (candidate.price > budget) {
                affordibility = 'price-too-expensive';
            }
            
            let twitterTimeline;

            if (this.props.candidate.screenName) {
                twitterTimeline = (
                    <TwitterTimeline screenName={this.props.candidate.screenName} />
                )
            }

            individualCandidate = (
                <div className="individual-candidate-container">
                    <div className="individual-candidate-information">
                        <div className="candidate-details">
                            <div className="individual-candidate-name">{candidate.name}</div>
                            <div>{party}</div>
                            <br />
                            <div className="candidate-congress-info">{chamber}</div>
                            <div>{candidate.state} {district}</div>
                            <br />
                            <div className={affordibility}>Price: ${candidate.price}</div>
                            {button}
                        </div>
                        <div className='twitter-timeline-container'>
                            {twitterTimeline}
                        </div>
                    </div>
                </div>
            );
        }

        let menu;
		if (this.props.menuVisible) {
            menu = <Menu />;
        }

        return (
            <div className="candidate-view">
                {menu}
                <TeamPreview />
                {individualCandidate}
                <div className="desktop">
                    <TeamPage />
                </div>
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
        menuVisible: state.user.menuVisible,
        senate: state.user.user.senate || [],
        house: state.user.user.house || [],
        budget: state.user.user.budget
    };
};

export default requiresLogin()(connect(mapStateToProps)(CandidateView));