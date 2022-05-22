import * as actions from '../constants/wsConnection'
import {wsReducer} from "./wsConnection";

const iInitialSocketState= {
    wsConnected: false,
    data: {
        orders: [],
        total: 0,
        totalToday: 0
    },
    error: null,
}

describe('wsReducer', () => {
    it('should return the initial state', () => {
        expect(wsReducer(undefined, {})).toEqual(iInitialSocketState);
    });

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(
            wsReducer(iInitialSocketState, {
                type: actions.WS_CONNECTION_SUCCESS,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                wsConnected: true,
                error: null,
            })
        );
    });

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(
            wsReducer(iInitialSocketState, {
                type: actions.WS_CONNECTION_ERROR,
                payload: {}
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: {},
                wsConnected: false,
            })
        );
    });

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(
            wsReducer(iInitialSocketState, {
                type: actions.WS_CONNECTION_CLOSED,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: null,
                wsConnected: false,
            })
        );
    });

    it('should handle WS_GET_ORDERS', () => {
        expect(
            wsReducer(iInitialSocketState, {
                type: actions.WS_GET_ORDERS,
                payload: {
                    orders: [{},{}],
                    total: 12,
                    totalToday: 4,
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: null,
                data: {
                    ...iInitialSocketState.data,
                    orders: [{},{}],
                    total: 12,
                    totalToday: 4,
                },
            })
        );
    });
})