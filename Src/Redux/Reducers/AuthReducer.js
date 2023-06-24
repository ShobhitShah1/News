import * as ActionType from '../Actions/ActionType';

const initialState = {
  user: null,
  login_type: null,
  hasSeenNavTooltip: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_AUTH:
      return {
        ...state,
        user: action.data,
        login_type: action.login_type,
      };
    case ActionType.SET_HAS_SEEN_NAV_TOOLTIP:
      return {
        ...state,
        hasSeenNavTooltip: action.payload.hasSeenNavTooltip,
      };
    case 'RESET_STATE':
      return initialState;
    default:
      return state;
  }
};
