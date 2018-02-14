import React from 'react';
import { connect } from 'react-redux';
import { removeHouseCandidate } from '../actions/user';
import './house-team-member.css';

export class HouseTeamMembers extends React.Component {
    
    render() {
            let houseTeamMembers = this.props.house.map(member => {
                return (
                    <li key={member.candidate_id._id}>
                            <div className="member-container">
                                <div className="member-information">
                                    <img className="member-headshot" src={member.candidate_id.image} alt="member headshot" />
                                    <div className="member-stats">
                                        <div className="member-name">{member.candidate_id.name} ({member.candidate_id.party})</div>
                                        <div className="member-congress-info">{member.candidate_id.state} {member.candidate_id.district}</div>
                                    </div>
                                </div>
                                <div className="adding-member">
							        <div className="member-price">${member.candidate_id.price}</div>
							        <button value={member._id} onClick={ event => this.props.dispatch(removeHouseCandidate(event.currentTarget.value)) }>Remove from Team</button>
						        </div>
                            </div>
                      </li>
                )
            })
            if (this.props.house.length < 8) {
                for (let i=1; i<(9 - this.props.house.length); i++) {
                    houseTeamMembers = [...houseTeamMembers, <li key={i} className="empty-roster-spot">{i}. House Candidate</li>]
                }
            }
    return (
        <ul>
            {houseTeamMembers}
        </ul>
    )}
}

const mapStateToProps = state => ({
    house: state.user.user.house || []
})

export default connect(mapStateToProps)(HouseTeamMembers);