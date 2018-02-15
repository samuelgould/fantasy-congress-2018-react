import React from 'react';
import { connect } from 'react-redux';
import { removeTeamMember } from '../actions/user';
import './team-member.css';

export class HouseTeamMembers extends React.Component {
    
    render() {
            let houseTeamMembers = this.props.house.map(member => {
                return (
                    <li key={member.candidate_id._id}>
                            <div className="member-container">
                                <div className="member-information">
                                    {/* <img className="member-headshot verbose" src={member.candidate_id.image} alt="member headshot" /> */}
                                    <div className="member-name">{member.candidate_id.name} ({member.candidate_id.party}-{member.candidate_id.stateAbbr}-{member.candidate_id.district})</div>
                                    <div className="member-price">${member.candidate_id.price}</div>
                                </div>
                                <div className="removing-member">
							        <button value={member._id} onClick={ event => this.props.dispatch(removeTeamMember(event.currentTarget.value, 'house')) }>Remove</button>
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