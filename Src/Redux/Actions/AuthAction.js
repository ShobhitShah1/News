import auth from '@react-native-firebase/auth'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const requestLogin = () => ({
    type: LOGIN_REQUEST
});

export const receiveLogin = user => ({
    type: LOGIN_SUCCESS,
    payload: { user },
});

export const loginError = error => ({
    type: LOGIN_FAILURE,
    payload: { error },
});

export const setUser = (user) => {
    console.log("setUser", user);
    return {
        type: LOGIN_USER,
        user,
    };
};

export const logout = (user) => {
    return {
        type: LOGOUT_USER,
    };
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(requestLogin());
        const user = await auth().signInWithEmailAndPassword(email, password);
        dispatch(receiveLogin(user));
    } catch (error) {
        console.log("passwordcdcd", error);
        dispatch(loginError(error));
    }
};