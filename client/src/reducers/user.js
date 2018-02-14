import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_HOUSE_CANDIDATE_SUCCESS, ADD_HOUSE_CANDIDATE_REQUEST, ADD_HOUSE_CANDIDATE_ERROR, REMOVE_HOUSE_CANDIDATE_ERROR, REMOVE_HOUSE_CANDIDATE_REQUEST, REMOVE_HOUSE_CANDIDATE_SUCCESS } from '../actions/user';

const initialState = {
  loading: false,
  user: {},
  error: null
}

export const reducer = (state = initialState, action) => {
  if (action.type === FETCH_USER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === FETCH_USER_SUCCESS) {
		return Object.assign({}, state, {
			user: action.user,
			loading: false,
			error: null
		})
	}

	else if (action.type === FETCH_USER_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}

	if (action.type === ADD_HOUSE_CANDIDATE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === ADD_HOUSE_CANDIDATE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			user: {
				...state.user, 
				user: {
					...state.user.user,
					house: [...state.user.user.house, {candidate_id: {_id : action.candidate_id}}]
				}	
			}
		})	
	}

	else if (action.type === ADD_HOUSE_CANDIDATE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}

	if (action.type === REMOVE_HOUSE_CANDIDATE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === REMOVE_HOUSE_CANDIDATE_SUCCESS) {
		return {
			...state,
			loading: false,
			error: null,
			user: {
				...state.user, 
				user: {
					...state.user.user,
					house: state.user.user.house.filter(member => member._id !== action.member_id)
				}	
			}
		}
	}

	else if (action.type === REMOVE_HOUSE_CANDIDATE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}

	else {
		return state;
	}
}