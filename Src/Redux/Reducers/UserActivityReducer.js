import * as ActionType from '../Actions/ActionType';

const initialState = {
  UserActivity: []
}

const UserActivityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOG_ACTIVITY:
      return {
        ...state,
        UserActivity: Array.isArray(state.UserActivity)
          ? [...state.UserActivity, action.payload]
          : [action.payload]
      }
    case 'RESET_STATE':
      return initialState;
    default:
      return state
  }
}

export default UserActivityReducer