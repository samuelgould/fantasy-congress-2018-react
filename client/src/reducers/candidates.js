import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_ERROR, SEARCH_CANDIDATES  } from '../actions/candidates';

const initialState = {
  candidates: [],
  loading: false,
  error: null,
  searchString: ''
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
	
	else if (action.type === SEARCH_CANDIDATES) {
		return Object.assign({}, state, {
			searchString: action.searchString
		})
	}

	else {
		return state;
	}
}