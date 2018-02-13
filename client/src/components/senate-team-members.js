import React from 'react';
import { connect } from 'react-redux';
import './senate-team-member.css';

export class SenateTeamMembers extends React.Component {
    
    render() {
            const senateTeamMembers = this.props.senate.map(member => {
                return (
                    <li className="js-member-id-element" key={member.candidate_id._id}>
                            <div className="member-container">
                                <div className="member-information">
                                    <img className="member-headshot" src={member.candidate_id.image} alt="member headshot" />
                                    <div className="member-stats">
                                        <div className="member-name">{member.candidate_id.name} ({member.candidate_id.party})</div>
                                        <div className="member-congress-info">{member.candidate_id.state} {member.candidate_id.district}</div>
                                    </div>
                                </div>
                                <div className="member-price">${member.candidate_id.price}</div>
                            </div>
                      </li>
                )
            })
    return (
        <ul>
            {senateTeamMembers}
        </ul>
    )}
}

const mapStateToProps = state => ({
    senate: state.user.user.senate || []
})

export default connect(mapStateToProps)(SenateTeamMembers);