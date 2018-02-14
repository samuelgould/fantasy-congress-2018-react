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

export const ADD_HOUSE_CANDIDATE_REQUEST = 'ADD_HOUSE_CANDIDATE_REQUEST';
export const addHouseCandidateRequest = () => ({
  type: ADD_HOUSE_CANDIDATE_REQUEST
});

export const ADD_HOUSE_CANDIDATE_SUCCESS = 'ADD_HOUSE_CANDIDATE_SUCCESS';
export const addHouseCandidateSuccess = user => ({
	type: ADD_HOUSE_CANDIDATE_SUCCESS,
	user
});

export const ADD_HOUSE_CANDIDATE_ERROR = 'ADD_HOUSE_CANDIDATE_ERROR';
export const addHouseCandidateError = error => ({
  type: ADD_HOUSE_CANDIDATE_ERROR,
  error
});

export const addHouseCandidate = (candidate_id) => dispatch => {
	dispatch(addHouseCandidateRequest());
	return fetch(`${API_BASE_URL}/user/5a833ccc272541499cb27e52/house/${candidate_id}`, 
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
			dispatch(addHouseCandidateSuccess(user));
		})
		.catch(err => 
			dispatch(addHouseCandidateError(err))
		)
}

export const REMOVE_HOUSE_CANDIDATE_REQUEST = 'REMOVE_HOUSE_CANDIDATE_REQUEST';
export const removeHouseCandidateRequest = () => ({
  type: REMOVE_HOUSE_CANDIDATE_REQUEST
});

export const REMOVE_HOUSE_CANDIDATE_SUCCESS = 'REMOVE_HOUSE_CANDIDATE_SUCCESS';
export const removeHouseCandidateSuccess = member_id => ({
	type: REMOVE_HOUSE_CANDIDATE_SUCCESS,
	member_id
});

export const REMOVE_HOUSE_CANDIDATE_ERROR = 'REMOVE_HOUSE_CANDIDATE_ERROR';
export const removeHouseCandidateError = error => ({
  type: REMOVE_HOUSE_CANDIDATE_ERROR,
  error
});

export const removeHouseCandidate = (member_id) => dispatch => {
	dispatch(removeHouseCandidateRequest());
	return fetch(`${API_BASE_URL}/user/5a833ccc272541499cb27e52/house/${member_id}`, 
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
			dispatch(removeHouseCandidateSuccess(member_id));
		})
		.catch(err =>
			dispatch(removeHouseCandidateError(err))
		)
}