import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_CANDIDATE_SUCCESS, ADD_CANDIDATE_REQUEST, ADD_CANDIDATE_ERROR, REMOVE_TEAM_MEMBER_ERROR, REMOVE_TEAM_MEMBER_REQUEST, REMOVE_TEAM_MEMBER_SUCCESS } from '../actions/user';

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

	else if (action.type === ADD_CANDIDATE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === ADD_CANDIDATE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			user: action.user
		})	
	}

	else if (action.type === ADD_CANDIDATE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}

	else if (action.type === REMOVE_TEAM_MEMBER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	}

	else if (action.type === REMOVE_TEAM_MEMBER_SUCCESS) {
		if (action.chamber === 'house') {
			return Object.assign({}, state, {
				loading: false,
				error: null,
				user: {
					...state.user,
					house: state.user.house.filter(member => member._id !== action.member_id)
				}
			})
		} else if (action.chamber === 'senate') {
			return Object.assign({}, state, {
				loading: false,
				error: null,
				user: {
					...state.user,
					senate: state.user.senate.filter(member => member._id !== action.member_id)
				}
			})
		}
		return state;
	}

	else if (action.type === REMOVE_TEAM_MEMBER_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	}
	
	return state;
}