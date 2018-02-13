import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/user';

const initialState = {
  candidates: [],
  loading: false,
  user: null
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

	else {
		return state;
	}
}