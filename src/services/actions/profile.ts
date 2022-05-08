import {GET_LOGIN_INFO,
    GET_LOGIN_INFO_SUCCESS,
    GET_LOGIN_INFO_FAILED,
    GET_REGISTRATION_INFO,
    GET_REGISTRATION_INFO_SUCCESS,
    GET_REGISTRATION_INFO_FAILED,
    GET_LOGOUT_INFO,
    GET_LOGOUT_INFO_SUCCESS,
    GET_LOGOUT_INFO_FAILED,
    GET_USER_INFO,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILED,
    CHANGE_USER_INFO,
    CHANGE_USER_INFO_SUCCESS,
    CHANGE_USER_INFO_FAILED
} from '../constants/profile'
import {IUser} from "../../types/user";

export interface IGetLoginInfoAction {
    readonly type: typeof GET_LOGIN_INFO,
}

export interface IGetLoginInfoSuccessAction {
    readonly type: typeof GET_LOGIN_INFO_SUCCESS,
    readonly data: IUser
}

export interface IGetLoginInfoFailedAction {
    readonly type: typeof GET_LOGIN_INFO_FAILED,
}

export interface IGetLogOutInfoAction {
    readonly type: typeof GET_LOGOUT_INFO,
}

export interface IGetLogOutInfoSuccessAction {
    readonly type: typeof GET_LOGOUT_INFO_SUCCESS,
}

export interface IGetLogOutInfoFailedAction {
    readonly type: typeof GET_LOGOUT_INFO_FAILED,
}

export interface IGetRegistrationInfoAction {
    readonly type: typeof GET_REGISTRATION_INFO,
}

export interface IGetRegistrationInfoSuccessAction {
    readonly type: typeof GET_REGISTRATION_INFO_SUCCESS,
    readonly data: IUser
}

export interface IGetRegistrationInfoFailedAction {
    readonly type: typeof GET_REGISTRATION_INFO_FAILED,
}

export interface IGetUserInfoAction {
    readonly type: typeof GET_USER_INFO,
}

export interface IGetUserInfoSuccessAction {
    readonly type: typeof GET_USER_INFO_SUCCESS,
    readonly data: IUser
}

export interface IGetUserInfoFailedAction {
    readonly type: typeof GET_USER_INFO_FAILED,
}

export interface IChangeUserInfoAction {
    readonly type: typeof CHANGE_USER_INFO,
}

export interface IChangeUserInfoSuccessAction {
    readonly type: typeof CHANGE_USER_INFO_SUCCESS,
    readonly data: IUser
}

export interface IChangeUserInfoFailedAction {
    readonly type: typeof CHANGE_USER_INFO_FAILED,
}

export type TProfileActions = IGetLoginInfoAction |
    IGetLoginInfoSuccessAction |
    IGetLoginInfoFailedAction |
    IGetLogOutInfoAction |
    IGetLogOutInfoSuccessAction |
    IGetLogOutInfoFailedAction |
    IGetRegistrationInfoAction |
    IGetRegistrationInfoSuccessAction |
    IGetRegistrationInfoFailedAction |
    IGetUserInfoAction |
    IGetUserInfoSuccessAction |
    IGetUserInfoFailedAction |
    IChangeUserInfoAction |
    IChangeUserInfoSuccessAction |
    IChangeUserInfoFailedAction
