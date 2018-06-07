import { 
	FETCH_USER_REQUEST, 
	FETCH_USER_SUCCESS, 
	FETCH_USER_ERROR, 
	ADD_CANDIDATE_SUCCESS, 
	ADD_CANDIDATE_REQUEST, 
	ADD_CANDIDATE_ERROR, 
	REMOVE_TEAM_MEMBER_ERROR, 
	REMOVE_TEAM_MEMBER_REQUEST, 
	REMOVE_TEAM_MEMBER_SUCCESS,
	TOGGLE_MENU_VISIBILITY,
	DISPLAY_TEAM_VIEW,
	DISPLAY_CANDIDATE_SEARCH_VIEW,
	SUBMIT_TEAM_ERROR, 
	SUBMIT_TEAM_REQUEST, 
	SUBMIT_TEAM_SUCCESS
} from '../actions/user';

const initialState = {
  loading: false,
  user: {},
  error: null,
  candidatesVisible: true,
  menuVisible: false,
  teamVisible: false
}

export const reducer = (state = initialState, action) => {
  if (action.type === FETCH_USER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	} else if (action.type === FETCH_USER_SUCCESS) {
		return Object.assign({}, state, {
			user: action.user,
			loading: false,
			error: null
		})
	} else if (action.type === FETCH_USER_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} else if (action.type === ADD_CANDIDATE_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	} else if (action.type === ADD_CANDIDATE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			user: action.user
		})	
	} else if (action.type === ADD_CANDIDATE_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} else if (action.type === REMOVE_TEAM_MEMBER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	} else if (action.type === REMOVE_TEAM_MEMBER_SUCCESS) {
			return Object.assign({}, state, {
				loading: false,
				error: null,
				user: {
					...state.user,
					[action.chamber]: state.user[action.chamber].filter(member => member._id !== action.member_id)
				}
			})
	} else if (action.type === REMOVE_TEAM_MEMBER_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} else if (action.type === TOGGLE_MENU_VISIBILITY) {
		return Object.assign({}, state, {
			menuVisible: !state.menuVisible,
		})
	} else if (action.type === DISPLAY_TEAM_VIEW) {
		return Object.assign({}, state, {
			teamVisible: true,
			menuVisible: false,
			candidatesVisible: false
		})
	} else if (action.type === DISPLAY_CANDIDATE_SEARCH_VIEW) {
		return Object.assign({}, state, {
			teamVisible: false,
			menuVisible: false,
			candidatesVisible: true
		})
	} else if (action.type === SUBMIT_TEAM_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
		})
	} else if (action.type === SUBMIT_TEAM_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			user: action.user
		})	
	} else if (action.type === SUBMIT_TEAM_ERROR) {
		return Object.assign({}, state, {
			loading: false,
			error: action.error
		})
	} 

	return state;
}