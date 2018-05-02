import { 
	FETCH_CANDIDATES_REQUEST, 
	FETCH_CANDIDATES_SUCCESS, 
	FETCH_CANDIDATES_ERROR,
	FETCH_CANDIDATE_REQUEST,
	FETCH_CANDIDATE_SUCCESS,
	FETCH_CANDIDATE_ERROR, 
	SEARCH_CANDIDATES,
	TOGGLE_FILTERS,
	FILTER_CANDIDATES_BY_CHAMBER, 
	FILTER_CANDIDATES_BY_PARTY, 
	FILTER_CANDIDATES_BY_STATE,
	FILTER_CANDIDATES_BY_PRICE, 
	FILTER_ONLY_SHOW_INCUMBENTS, 
    FILTER_ONLY_AFFORDABLE
} from '../actions/candidates';

const initialState = {
  candidates: [],
  loading: false,
  error: null,
  searchString: '',
  filters: true,
  chamber: 'both',
  party: 'all',
  state: 'all',
  price: 'any',
  incumbent: false,
  candidate: null,
  candidateSelected: false
}

export const reducer = (state = initialState, action) => {
  if (action.type === FETCH_CANDIDATES_REQUEST) {
		return Object.assign({}, state, {
			loading: true
		})
	} else if (action.type === FETCH_CANDIDATES_SUCCESS) {
		return Object.assign({}, state, {
			candidates: action.candidates,
			loading: false,
			error: null
		})
	} else if (action.type === FETCH_CANDIDATES_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} else if (action.type === FETCH_CANDIDATE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			candidateSelected: true
		})
	} else if (action.type === FETCH_CANDIDATE_SUCCESS) {
		return Object.assign({}, state, {
			candidate: action.candidate,
			loading: false,
			error: null
		})
	} else if (action.type === FETCH_CANDIDATE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} else if (action.type === SEARCH_CANDIDATES) {
		return Object.assign({}, state, {
			searchString: action.searchString
		})
	} else if (action.type === TOGGLE_FILTERS) {
		return Object.assign({}, state, {
			filters: !state.filters
		})
	} else if (action.type === FILTER_CANDIDATES_BY_CHAMBER) {
		return Object.assign({}, state, {
			chamber: action.chamber
		})
	} else if (action.type === FILTER_CANDIDATES_BY_PARTY) {
		return Object.assign({}, state, {
			party: action.party
		})
	} else if (action.type === FILTER_CANDIDATES_BY_STATE) {
		return Object.assign({}, state, {
			state: action.state
		})
	} else if (action.type === FILTER_CANDIDATES_BY_PRICE) {
		return Object.assign({}, state, {
			price: action.price
		})
	} else if (action.type === FILTER_ONLY_SHOW_INCUMBENTS) {
		return Object.assign({}, state, {
			incumbent: action.incumbent
		})
	} else if (action.type === FILTER_ONLY_AFFORDABLE) {
		return Object.assign({}, state, {
			affordable: action.affordable
		})
	}
	return state;
}