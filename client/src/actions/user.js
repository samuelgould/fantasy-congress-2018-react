import { API_BASE_URL } from '../config'

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user
});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});

export const fetchUser = () => dispatch => {
	dispatch(fetchUserRequest());
	return fetch(`${API_BASE_URL}/user/5a833ccc272541499cb27e52`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(user => {
			dispatch(fetchUserSuccess(user));
		})
		.catch(err => 
			dispatch(fetchUserError(err))
		)
}

export const ADD_CANDIDATE_REQUEST = 'ADD_CANDIDATE_REQUEST';
export const addCandidateRequest = () => ({
  type: ADD_CANDIDATE_REQUEST
});

export const ADD_CANDIDATE_SUCCESS = 'ADD_CANDIDATE_SUCCESS';
export const addCandidateSuccess = user => ({
	type: ADD_CANDIDATE_SUCCESS,
	user
});

export const ADD_CANDIDATE_ERROR = 'ADD_CANDIDATE_ERROR';
export const addCandidateError = error => ({
  type: ADD_CANDIDATE_ERROR,
  error
});

export const addCandidate = (candidate_id, chamber) => dispatch => {
	dispatch(addCandidateRequest());
	return fetch(`${API_BASE_URL}/user/5a833ccc272541499cb27e52/${chamber}/${candidate_id}`, 
		{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
			}
		}).then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(user => {
			dispatch(addCandidateSuccess(user));
		})
		.catch(err => 
			dispatch(addCandidateError(err))
		)
}

export const REMOVE_TEAM_MEMBER_REQUEST = 'REMOVE_TEAM_MEMBER_REQUEST';
export const removeTeamMemberRequest = () => ({
  type: REMOVE_TEAM_MEMBER_REQUEST
});

export const REMOVE_TEAM_MEMBER_SUCCESS = 'REMOVE_TEAM_MEMBER_SUCCESS';
export const removeTeamMemberSuccess = (member_id, chamber) => ({
	type: REMOVE_TEAM_MEMBER_SUCCESS,
	member_id,
	chamber
});

export const REMOVE_TEAM_MEMBER_ERROR = 'REMOVE_TEAM_MEMBER_ERROR';
export const removeTeamMemberError = error => ({
  type: REMOVE_TEAM_MEMBER_ERROR,
  error
});

export const removeTeamMember = (member_id, chamber) => dispatch => {
	dispatch(removeTeamMemberRequest());
	return fetch(`${API_BASE_URL}/user/5a833ccc272541499cb27e52/${chamber}/${member_id}`, 
		{
      method: 'DELETE',
      headers: {
        'Accept': 'application/json'
			}
		}).then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.text()
		})
		.then(() => {
			dispatch(removeTeamMemberSuccess(member_id, chamber));
		})
		.catch(err =>
			dispatch(removeTeamMemberError(err))
		)
}