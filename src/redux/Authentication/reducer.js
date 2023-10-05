import { FETCH_FAILURE, FETCH_RQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_SUCCESS } from "../actionTypes"

const data = JSON.parse(localStorage.getItem("userDetails"));
const initialState = {
    isLoading: false,
    isError: false,
    user: JSON.parse(localStorage.getItem("userDetails")) || {},
    isAuth: data?.name !== undefined ? true : false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_RQUEST: {
            return { ...state, isLoading: true }
        }
        case FETCH_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }
        case LOGIN_SUCCESS: {
            return { ...state, isLoading: false, isAuth: true, user: payload }
        }
        case SIGNUP_SUCCESS: {
            return { ...state, isLoading: false }
        }
        case LOGOUT_SUCCESS: {
            return { ...state, user: {}, isAuth: false }
        }
        default:
            return state;
    }
}
