import * as ActionType from '../Actions/ActionType';

const initialState = {
  isLoading: false,
  user: null,
  login_type: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.USER_AUTH:
      return {
        ...state,
        user: action.data,
        login_type: action.login_type,
      };
    default:
      return state;
  }
};
