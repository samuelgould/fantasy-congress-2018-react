import React from 'react';
import { connect } from 'react-redux';
import { removeTeamMember } from '../actions/user';
import './senate-team-member.css';

export class SenateTeamMembers extends React.Component {
    
    render() {
            let senateTeamMembers = this.props.senate.map(member => {
                return (
                    <li key={member.candidate_id._id}>
                            <div className="member-container">
                                <div className="member-information">
                                    <img className="member-headshot" src={member.candidate_id.image} alt="member headshot" />
                                    <div className="member-stats">
                                        <div className="member-name">{member.candidate_id.name} ({member.candidate_id.party})</div>
                                        <div className="member-congress-info">{member.candidate_id.state}</div>
                                    </div>
                                </div>
                                <div className="adding-member">
							        <div className="member-price">${member.candidate_id.price}</div>
							        <button value={member._id} onClick={ event => this.props.dispatch(removeTeamMember(event.currentTarget.value, 'senate')) }>Remove from Team</button>
						        </div>
                            </div>
                      </li>
                )
            })
            if (this.props.senate.length < 4) {
                for (let i=1; i<(5- this.props.senate.length); i++) {
                    senateTeamMembers = [...senateTeamMembers, <li key={i} className="empty-roster-spot">{i}. Senate Candidate</li>]
                }
            }
    return (
        <ul className="senate-team-list">
            {senateTeamMembers}
        </ul>
    )}
}

const mapStateToProps = state => ({
    senate: state.user.user.senate || []
})

export default connect(mapStateToProps)(SenateTeamMembers);