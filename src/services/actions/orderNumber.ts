import {
    GET_ORDER_NUMBER,
    GET_ORDER_NUMBER_FAILED,
    GET_ORDER_NUMBER_SUCCESS,
    CLEAR_ORDER_NUMBER} from '../constants/orderNumber'

export interface IGetOrderNumberAction {
    readonly type: typeof GET_ORDER_NUMBER
}

export interface IGetOrderNumberFailedAction {
    readonly type: typeof GET_ORDER_NUMBER_FAILED
}

export interface IGetOrderNumberSuccessAction {
    readonly type: typeof GET_ORDER_NUMBER_SUCCESS,
    readonly data: number
}

export interface IClearOrderNumberAction {
    readonly type: typeof CLEAR_ORDER_NUMBER
}

export type TOrderNumberActions = IGetOrderNumberAction |
    IGetOrderNumberFailedAction |
    IGetOrderNumberSuccessAction |
    IClearOrderNumberAction