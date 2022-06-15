import * as actions from '../constants/wsConnectionUser'
import {wsReducerUser} from "./wsConnectionUser";


const iInitialSocketState= {
    wsConnected: false,
    data: {
        orders: [],
    },
    error: null,
}

describe('wsReducerUser', () => {
    it('should return the initial state', () => {
        expect(wsReducerUser(undefined, {})).toEqual(iInitialSocketState);
    });

    it('should handle WS_CONNECTION_START_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_START_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                wsConnected: true,
                error: null,
            })
        );
    });

    it('should handle WS_CONNECTION_ERROR_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_ERROR_USER,
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

    it('should handle WS_CONNECTION_CLOSED_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_CONNECTION_CLOSED_USER,
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: null,
                wsConnected: false,
            })
        );
    });

    it('should handle WS_GET_ORDERS_USER', () => {
        expect(
            wsReducerUser(iInitialSocketState, {
                type: actions.WS_GET_ORDERS_USER,
                payload: {
                    orders: [{},{}],
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...iInitialSocketState,
                error: null,
                data: {
                    ...iInitialSocketState.data,
                    orders: [{},{}],
                },
            })
        );
    });
})