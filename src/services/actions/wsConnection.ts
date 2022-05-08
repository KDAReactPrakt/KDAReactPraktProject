import {
    WS_CONNECTION_START,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_ORDERS,
    WS_SEND_MESSAGE
} from "../constants/wsConnection";
import {PayloadAction} from "@reduxjs/toolkit";
import {TWSData} from "../../types/wsData";

export const wsActions = {
    wsInit: WS_CONNECTION_START,
    wsSendMessage: WS_SEND_MESSAGE,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS,
};

export interface IWSStart {
    readonly type: typeof WS_CONNECTION_START;
}

export interface IWSSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: PayloadAction;
}

export interface IWSError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: PayloadAction;
}

export interface IWSClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: PayloadAction;
}

export interface IWSGetOrders {
    readonly type: typeof WS_GET_ORDERS;
    readonly payload: TWSData;
}

export interface IWSSendMessage {
    readonly type: typeof WS_SEND_MESSAGE;
}

export type TWSActions =
    | IWSStart
    | IWSSuccess
    | IWSError
    | IWSClosed
    | IWSGetOrders
    | IWSSendMessage;