import * as actions from '../constants/profile'
import {profileReducer} from "./profile";

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

describe('profileReducer', () => {
    it('should return the initial state', () => {
        expect(profileReducer(undefined, {})).toEqual(profileInitialState);
    });

    it('should handle GET_LOGIN_INFO', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: true,
                loginInfoFailed: false,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGIN_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO_SUCCESS,
                data: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                },
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            })
        );
    });

    it('should handle GET_LOGIN_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGIN_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                logoutInfo: true,
                logoutInfoFailed: false,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO_SUCCESS,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {},
                logoutInfo: false,
                logoutInfoFailed: false,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_LOGOUT_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_LOGOUT_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                logoutInfo: false,
                logoutInfoFailed: true,
                logoutInfoSuccess: false
            })
        );
    });

    it('should handle GET_REGISTER_INFO', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                register: true,
                registerFailed: false,
                registerSuccess: false
            })
        );
    });

    it('should handle GET_REGISTER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO_SUCCESS,
                data: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                },
                register: false,
                registerFailed: false,
                registerSuccess: true
            })
        );
    });

    it('should handle GET_REGISTER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_REGISTRATION_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                register: false,
                registerFailed: true,
                registerSuccess: false
            })
        );
    });

    it('should handle GET_USER_INFO', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                getUserInfo: true,
                getUserInfoFailed: false,
                getUserInfoSuccess: false
            })
        );
    });

    it('should handle GET_USER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO_SUCCESS,
                data: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                },
                getUserInfo: false,
                getUserInfoFailed: false,
                getUserInfoSuccess: true
            })
        );
    });

    it('should handle GET_USER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.GET_USER_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                getUserInfo: false,
                getUserInfoFailed: true,
                getUserInfoSuccess: false
            })
        );
    });

    it('should handle CHANGE_USER_INFO', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: true,
                loginInfoFailed: false,
                loginInfoSuccess: false
            })
        );
    });

    it('should handle CHANGE_USER_INFO_SUCCESS', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO_SUCCESS,
                data: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                user: {
                    email: 'test@test.eu',
                    name: 'test',
                    pwd: 'test123',
                },
                loginInfo: false,
                loginInfoFailed: false,
                loginInfoSuccess: true
            })
        );
    });

    it('should handle CHANGE_USER_INFO_FAILED', () => {
        expect(
            profileReducer(profileInitialState, {
                type: actions.CHANGE_USER_INFO_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...profileInitialState,
                loginInfo: false,
                loginInfoFailed: true,
                loginInfoSuccess: false
            })
        );
    });
})