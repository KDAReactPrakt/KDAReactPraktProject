import {
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_FAILED,
    CLEAR_ORDER_NUMBER
} from '../actions/orderNumber';

const orderNumberInitialState = {
    orderNumber: 0,
    orderNumberSuccess: false,
    orderNumberFailed: false,
    orderNumberRequest: false
};

export const orderNumberReducer = (state = orderNumberInitialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER: {
            return {
                ...state,
                orderNumberRequest: true,
                orderNumberFailed: false,
                orderNumberSuccess: false
            };
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return {
                ...state,
                orderNumber: action.data,
                orderNumberRequest: false,
                orderNumberFailed: false,
                orderNumberSuccess: true
            };
        }
        case GET_ORDER_NUMBER_FAILED: {
            return {
                ...state,
                orderNumberRequest: false,
                orderNumberFailed: true,
                orderNumberSuccess: false
            };
        }
        case CLEAR_ORDER_NUMBER: {
            return {
                ...state,
                orderNumber: 0,
                orderNumberRequest: false,
                orderNumberFailed: false,
                orderNumberSuccess: false
            }
        }
        default: {
            return state
        }
    }
}