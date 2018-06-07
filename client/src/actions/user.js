import { SubmissionError } from 'redux-form';

import { API_BASE_URL } from '../config'

export const registerUser = user => dispatch => {
	return fetch(`${API_BASE_URL}/user`, {
			method: 'POST',
			headers: {
					'content-type': 'application/json'
			},
			body: JSON.stringify(user)
	})
			.then(res => res.json())
			.catch(err => {
					const {reason, message, location} = err;
					if (reason === 'ValidationError') {
							return Promise.reject(
									new SubmissionError({
											[location]: message
									})
							);
					}
			});
};

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

export const fetchUser = () => (dispatch, getState) => {
	dispatch(fetchUserRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/user/self`, {
		method: 'GET',
		headers: {
				'Authorization': `Bearer ${authToken}`
		}
	})
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

export const addCandidate = (candidate_id, chamber) => (dispatch, getState) => {
	dispatch(addCandidateRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/user/self/${chamber}/${candidate_id}`, 
		{
      method: 'PUT',
      headers: {
        		'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${authToken}`
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

export const removeTeamMember = (member_id, chamber) => (dispatch, getState) => {
	dispatch(removeTeamMemberRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/user/self/${chamber}/${member_id}`, 
		{
      method: 'DELETE',
      headers: {
				'Accept': 'application/json',
				'Authorization': `Bearer ${authToken}`
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
};

export const TOGGLE_MENU_VISIBILITY = 'TOGGLE_MENU_VISIBILITY';
export const toggleMenuVisibility = () => ({
	type: TOGGLE_MENU_VISIBILITY
});

export const DISPLAY_TEAM_VIEW = 'DISPLAY_TEAM_VIEW';
export const displayTeamView = () => ({
	type: DISPLAY_TEAM_VIEW
})

export const DISPLAY_CANDIDATE_SEARCH_VIEW = 'DISPLAY_CANDIDATE_SEARCH_VIEW';
export const displayCandidateSearchView = () => ({
	type: DISPLAY_CANDIDATE_SEARCH_VIEW
})

export const SUBMIT_TEAM_REQUEST = 'SUBMIT_TEAM_REQUEST';
export const submitTeamRequest = () => ({
  type: SUBMIT_TEAM_REQUEST
});

export const SUBMIT_TEAM_SUCCESS = 'SUBMIT_TEAM_SUCCESS';
export const submitTeamSuccess = (member_id, chamber) => ({
	type: SUBMIT_TEAM_SUCCESS,
	member_id,
	chamber
});

export const SUBMIT_TEAM_ERROR = 'SUBMIT_TEAM_ERROR';
export const submitTeamError = error => ({
  type: SUBMIT_TEAM_ERROR,
  error
});

export const submitTeam = () => (dispatch, getState) => {
	dispatch(submitTeamRequest());
	const authToken = getState().auth.authToken;
	return fetch(`${API_BASE_URL}/user/self/submitTeam`, 
		{
      method: 'PUT',
      headers: {
        		'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${authToken}`
			}
		}).then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(user => {
			dispatch(submitTeamSuccess(user));
		})
		.catch(err => 
			dispatch(submitTeamError(err))
		)
}