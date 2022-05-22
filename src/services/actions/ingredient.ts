import {
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS,
    DECREASE_ITEM_COUNT,
    CLEAR_COUNT,
    INCREASE_ITEM_COUNT
} from "../constants/ingredient";
import {IIngridient} from "../../types/Ingredient";

export interface IGetIngredientAction {
    readonly type: typeof GET_INGREDIENT,
}

export interface IGetIngredientFailedAction {
    readonly type: typeof GET_INGREDIENT_FAILED,
}

export interface IGetIngredientSuccessAction {
    readonly type: typeof GET_INGREDIENT_SUCCESS,
    readonly data: Array<IIngridient>
}

export interface IDecreaseItemCountAction {
    readonly type: typeof DECREASE_ITEM_COUNT,
    readonly id: string
}

export interface IClearCountAction {
    readonly type: typeof CLEAR_COUNT,
}

export interface IIncreaseItemCountAction {
    readonly type: typeof INCREASE_ITEM_COUNT,
    readonly id: string
}

export type TIngredientAction = IGetIngredientAction |
    IGetIngredientFailedAction |
    IGetIngredientSuccessAction |
    IDecreaseItemCountAction |
    IClearCountAction |
    IIncreaseItemCountAction