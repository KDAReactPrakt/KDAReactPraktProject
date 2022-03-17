import {
    CHANGE_USER_INFO, CHANGE_USER_INFO_FAILED, CHANGE_USER_INFO_SUCCESS,
    GET_LOGIN_INFO,
    GET_LOGIN_INFO_FAILED,
    GET_LOGIN_INFO_SUCCESS,
    GET_LOGOUT_INFO,
    GET_LOGOUT_INFO_FAILED,
    GET_LOGOUT_INFO_SUCCESS,
    GET_REGISTRATION_INFO,
    GET_REGISTRATION_INFO_FAILED,
    GET_REGISTRATION_INFO_SUCCESS, GET_USER_INFO, GET_USER_INFO_FAILED, GET_USER_INFO_SUCCESS,
} from "../actions/profile";

const profileInitialState = {
    user: {},

    loginInfo: false,
    loginInfoSuccess: false,
    loginInfoFailed:false,

    getUserInfo: false,
    getUserInfoSuccess: false,
    getUserInfoFailed:false,

    register: false,
    registerSuccess: false,
    registerFailed: false,

    logoutInfo: false,
    logoutInfoSuccess: false,
    logoutInfoFailed: false,
};


export const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case GET_LOGIN_INFO: {
            return {
                ...state,
                loginInfo: true,
                loginInfoSuccess: false,
                loginInfoFailed: false
            };
        }
        case GET_LOGIN_INFO_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            };
        }
        case GET_LOGIN_INFO_FAILED: {
            return {
                ...state,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            };
        }
        case GET_LOGOUT_INFO: {
            return {
                ...state,
                logoutInfo: true,
                logoutInfoSuccess: false,
                logoutInfoFailed: false
            };
        }
        case GET_LOGOUT_INFO_SUCCESS: {
            return {
                ...profileInitialState
            };
        }
        case GET_LOGOUT_INFO_FAILED: {
            return {
                ...state,
                logoutInfo: false,
                logoutInfoFailed: true,
                logoutInfoSuccess: false
            };
        }
        case GET_REGISTRATION_INFO: {
            return {
                ...state,
                register: true,
                registerSuccess: false,
                registerFailed: false
            };
        }
        case GET_REGISTRATION_INFO_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                register: false,
                registerFailed: false,
                registerSuccess: true
            };
        }
        case GET_REGISTRATION_INFO_FAILED: {
            return {
                ...state,
                register: false,
                registerFailed: true,
                registerSuccess: false
            };
        }
        case GET_USER_INFO: {
            return {
                ...state,
                getUserInfo: true,
                getUserInfoSuccess: false,
                getUserInfoFailed: false
            };
        }
        case GET_USER_INFO_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                getUserInfo: false,
                getUserInfoFailed: false,
                getUserInfoSuccess: true
            };
        }
        case GET_USER_INFO_FAILED: {
            return {
                ...state,
                getUsernfo: false,
                getUserInfoFailed: true,
                getUserInfoSuccess: false
            };
        }
        case CHANGE_USER_INFO: {
            return {
                ...state,
                loginInfo: true,
                loginInfoSuccess: false,
                loginInfoFailed: false
            };
        }
        case CHANGE_USER_INFO_SUCCESS: {
            return {
                ...state,
                user: action.data.user,
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            };
        }
        case CHANGE_USER_INFO_FAILED: {
            return {
                ...state,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            };
        }
        default: {
            return state
        }
    }
}