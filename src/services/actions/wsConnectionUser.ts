import {
    WS_CONNECTION_START_USER,
    WS_CONNECTION_CLOSED_USER,
    WS_CONNECTION_ERROR_USER,
    WS_CONNECTION_SUCCESS_USER,
    WS_GET_ORDERS_USER,
    WS_SEND_MESSAGE_USER
} from "../constants/wsConnectionUser";
import {PayloadAction} from "@reduxjs/toolkit";
import {TWSData} from "../../types/wsData";

export const wsActionsUser = {
    wsInit: WS_CONNECTION_START_USER,
    wsSendMessage: WS_SEND_MESSAGE_USER,
    onOpen: WS_CONNECTION_SUCCESS_USER,
    onClose: WS_CONNECTION_CLOSED_USER,
    onError: WS_CONNECTION_ERROR_USER,
    onMessage: WS_GET_ORDERS_USER,
};

export interface IWSStartUser {
    readonly type: typeof WS_CONNECTION_START_USER;
}

export interface IWSSuccessUser {
    readonly type: typeof WS_CONNECTION_SUCCESS_USER;
    readonly payload: PayloadAction;
}

export interface IWSErrorUser {
    readonly type: typeof WS_CONNECTION_ERROR_USER;
    readonly payload: PayloadAction;
}

export interface IWSClosedUser {
    readonly type: typeof WS_CONNECTION_CLOSED_USER;
    readonly payload: PayloadAction;
}

export interface IWSGetOrdersUser {
    readonly type: typeof WS_GET_ORDERS_USER;
    readonly payload: TWSData;
}

export interface IWSSendMessageUser {
    readonly type: typeof WS_SEND_MESSAGE_USER;
}

export type TWSActionsUser =
    | IWSStartUser
    | IWSSuccessUser
    | IWSErrorUser
    | IWSClosedUser
    | IWSGetOrdersUser
    | IWSSendMessageUser;