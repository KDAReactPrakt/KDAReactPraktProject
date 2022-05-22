import {
    WS_CONNECTION_CLOSED_USER,
    WS_CONNECTION_ERROR_USER,
    WS_CONNECTION_START_USER,
    WS_GET_ORDERS_USER,
} from '../constants/wsConnectionUser';
import {TInitialSocketState} from '../../types/wsData';
import {TWSActionsUser} from "../actions/wsConnectionUser";

const iInitialSocketState: TInitialSocketState = {
    wsConnected: false,
    data: {
        orders: []
    },
    error: null
};

export const wsReducerUser = (state = iInitialSocketState, action: TWSActionsUser): TInitialSocketState => {
    switch (action.type) {
        case WS_CONNECTION_START_USER:
            return {
                ...state,
                wsConnected: true,
                error: null,
            };
        case WS_CONNECTION_ERROR_USER:
            return {
                ...state,
                error: action.payload,
                wsConnected: false,
            };
        case WS_CONNECTION_CLOSED_USER:
            return {
                ...state,
                error: null,
                wsConnected: false,
            };
        case WS_GET_ORDERS_USER:
            return {
                ...state,
                error: null,
                data: {
                    ...state.data,
                    orders: action.payload.orders,
                },
            };
        default:
            return state;
    }
};