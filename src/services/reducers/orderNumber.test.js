import * as actions from '../constants/orderNumber'
import {orderNumberReducer} from "./orderNumber";

const initialOrderNumberState = {
    orderNumber: 0,
    orderNumberSuccess: false,
    orderNumberFailed: false,
    orderNumberRequest: false
}

describe('orderNumberReducer', () => {
    it('should return the initial state', () => {
        expect(orderNumberReducer(undefined, {})).toEqual(initialOrderNumberState);
    });

    it('should handle GET_ORDER_NUMBER', () => {
        expect(
            orderNumberReducer(initialOrderNumberState, {
                type: actions.GET_ORDER_NUMBER,
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderNumberState,
                orderNumberRequest: true,
                orderNumberFailed: false,
                orderNumberSuccess: false
            })
        );
    });

    it('should handle GET_ORDER_NUMBER_SUCCESS', () => {
        expect(
            orderNumberReducer(initialOrderNumberState, {
                type: actions.GET_ORDER_NUMBER_SUCCESS,
                data: '123123'
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderNumberState,
                orderNumber: '123123',
                orderNumberRequest: false,
                orderNumberSuccess: true,
                orderNumberFailed: false,
            })
        );
    });

    it('should handle GET_ORDER_NUMBER_FAILED', () => {
        expect(
            orderNumberReducer(initialOrderNumberState, {
                type: actions.GET_ORDER_NUMBER_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...initialOrderNumberState,
                orderNumberRequest: false,
                orderNumberFailed: true,
                orderNumberSuccess: false
            })
        );
    });

    it('should handle CLEAR_ORDER_NUMBER', () => {
        expect(
            orderNumberReducer(initialOrderNumberState, {
                type: actions.CLEAR_ORDER_NUMBER,
            })
        ).toEqual(
            expect.objectContaining({
                orderNumber: 0,
                orderNumberSuccess: false,
                orderNumberFailed: false,
                orderNumberRequest: false
            })
        );
    });
})