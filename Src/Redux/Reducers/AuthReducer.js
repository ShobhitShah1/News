import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_USER, LOGOUT_USER } from "../Actions/AuthAction";

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
                user: action.payload.user,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
            };
        case LOGIN_USER:
            return {
                ...state,
                user: action.user,
            };
        case LOGOUT_USER:
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
};
