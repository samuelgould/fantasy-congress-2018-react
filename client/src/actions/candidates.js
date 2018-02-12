import { API_BASE_URL } from '../config'

export const FETCH_CANDIDATES_REQUEST = 'FETCH_CANDIDATES_REQUEST';
export const fetchCandidatesRequest = () => ({
  type: FETCH_CANDIDATES_REQUEST
});

export const FETCH_CANDIDATES_SUCCESS = 'FETCH_CANDIDATES_SUCCESS';
export const fetchCandidatesSuccess = candidates => ({
  type: FETCH_CANDIDATES_SUCCESS,
  candidates
});

export const FETCH_CANDIDATES_ERROR = 'FETCH_CANDIDATES_ERROR';
export const fetchCandidatesError = error => ({
  type: FETCH_CANDIDATES_ERROR,
  error
});

export const SEARCH_CANDIDATES = 'SEARCH_CANDIDATES';
export const searchCandidates = searchString => ({
	type: SEARCH_CANDIDATES,
	searchString
})

export const fetchCandidates = () => dispatch => {
	dispatch(fetchCandidatesRequest());
	return fetch(`${API_BASE_URL}/candidates`)
		.then(res => {
			if (!res.ok) {
				return Promise.reject('Something has gone wrong');
			}
			return res.json()
		})
		.then(candidates => {
			dispatch(fetchCandidatesSuccess(candidates))
		})
		.catch(err => 
			dispatch(fetchCandidatesError(err))
		)
}