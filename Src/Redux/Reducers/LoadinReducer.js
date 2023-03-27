import * as ActionType from '../Actions/ActionType';

const initialState = {
  COLORMODE: null,
  Loading: false,
};

export default (state = initialState, action) => {
  console.log('Action.Loading', action.type);
  switch (action.type) {
    case ActionType.APP_MODE:
      return {
        COLORMODE: action.BackgroundColoe,
        Loading: action.Loading,
        TextColor: action.TextColor,
      };
    case ActionType.LOADING:
      return {
        Loading: action.Loading,
      };

    default:
      return state;
  }
};
