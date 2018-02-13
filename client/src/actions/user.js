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
	return fetch(`${API_BASE_URL}/user/5a832661d7623546cbf4bcca`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(user => {
            console.log(user);
			dispatch(fetchUserSuccess(user));
		})
		.catch(err => 
			dispatch(fetchUserError(err))
		)
	}