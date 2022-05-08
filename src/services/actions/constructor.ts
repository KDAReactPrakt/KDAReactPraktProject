import {
    SET_BUN,
    SET_ITEM,
    DROP_ITEM,
    CHANGE_POSITION,
    SET_HOVER_POSITION,
    DROP_HOVER_POSITION,
    CLEAR_BASKET
} from '../constants/constructor';
import {IIngridient} from "../../types/Ingredient";

export interface ISetBunAction {
    readonly type: typeof SET_BUN,
    readonly data: IIngridient,
}

export interface ISetItemAction {
    readonly type: typeof SET_ITEM,
    readonly data: IIngridient
    readonly uid: string,
}

export interface IDropItemAction {
    readonly type: typeof DROP_ITEM,
    readonly id: string
}

export interface IChangePositionAction {
    readonly type: typeof CHANGE_POSITION,
    readonly id: string,
    readonly difference: number,
}

export interface ISetHoverPositionAction {
    readonly type: typeof SET_HOVER_POSITION,
    readonly position: number,
}

export interface IDropHoverPositionAction {
    readonly type: typeof DROP_HOVER_POSITION;
    readonly position: number,
}

export interface IClearBasketAction {
    readonly type: typeof CLEAR_BASKET;
}

export type TConstructorActions = IChangePositionAction |
    ISetItemAction |
    ISetBunAction |
    IDropHoverPositionAction |
    IClearBasketAction |
    ISetHoverPositionAction |
    IDropItemAction
