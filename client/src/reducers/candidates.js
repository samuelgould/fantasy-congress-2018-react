import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_ERROR } from '../actions/candidates';

const initialState = {
  candidates: [],
  loading: false,
  error: null
}

export const reducer = (state = initialState, action) => {
  if (action.type === FETCH_CANDIDATES_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === FETCH_CANDIDATES_SUCCESS) {
		return Object.assign({}, state, {
			candidates: action.candidates,
			loading: false,
			error: null
		})
	}

	else if (action.type === FETCH_CANDIDATES_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}
	else {
		return state;
	}
}