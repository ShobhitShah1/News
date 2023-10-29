import * as ActionType from '../Actions/ActionType';

const initialState = {
  COLORMODE: null,
  Loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.APP_MODE:
      return {
        ...state,
        COLORMODE: action.BackgroundColoe,
        Loading: action.Loading,
        TextColor: action.TextColor,
      };
    case ActionType.LOADING:
      return {
        ...state,
        Loading: action.Loading,
      };

    default:
      return state;
  }
};
