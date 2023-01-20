import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../Actions/AuthAction";

const initialState = {
    isLoading: false,
    user: null,
    error: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            };
        default:
            return state;
    }
};
