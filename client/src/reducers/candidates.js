import { FETCH_CANDIDATES_REQUEST, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_ERROR, SEARCH_CANDIDATES, FILTER_CANDIDATES_BY_CHAMBER, FILTER_CANDIDATES_BY_PARTY, FILTER_CANDIDATES_BY_STATE } from '../actions/candidates';

const initialState = {
  candidates: [],
  loading: false,
  error: null,
  searchString: '',
  chamber: 'both',
  party: 'all',
  state: 'all'
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

	else if (action.type === FILTER_CANDIDATES_BY_CHAMBER) {
		return Object.assign({}, state, {
			chamber: action.chamber
		})
	}

	else if (action.type === FILTER_CANDIDATES_BY_PARTY) {
		return Object.assign({}, state, {
			party: action.party
		})
	}

	else if (action.type === FILTER_CANDIDATES_BY_STATE) {
		return Object.assign({}, state, {
			state: action.state
		})
	}

	else {
		return state;
	}
}