import {
    GET_CURRENT_ITEM,
    CLEAR_CURRENT_ITEM,
    GET_CURRENT_ORDER_NUMBER,
    CLEAR_CURRENT_ORDER_NUMBER
} from "../constants/currentItem";
import {IIngridient} from "../../types/Ingredient";

export interface IGetCurrentItemAction {
    readonly type: typeof GET_CURRENT_ITEM,
    readonly data: IIngridient,
}

export interface IClearCurrentItemAction {
    readonly type: typeof CLEAR_CURRENT_ITEM,
}

export interface IGetCurrentOrderItemAction {
    readonly type: typeof GET_CURRENT_ORDER_NUMBER,
    readonly data: string,
}

export interface IClearCurrentOrderNumberAction {
    readonly type: typeof CLEAR_CURRENT_ORDER_NUMBER,
}

export type TCurrentItemAction = IGetCurrentItemAction
    | IClearCurrentItemAction
    | IGetCurrentOrderItemAction
    | IClearCurrentOrderNumberAction