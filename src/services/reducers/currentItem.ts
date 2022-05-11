import {
    CLEAR_CURRENT_ITEM,
    CLEAR_CURRENT_ORDER_NUMBER,
    GET_CURRENT_ITEM,
    GET_CURRENT_ORDER_NUMBER
} from '../constants/currentItem';
import {TCurrentItemAction} from "../actions/currentItem";
import {IIngridient} from "../../types/Ingredient";

interface ICurrentItemInitialState {
    currentItem: IIngridient,
    currentOrderNumber: string,
    activeModal: boolean
}

const currentItemInitialState: ICurrentItemInitialState = {
    currentItem: {} as IIngridient,
    currentOrderNumber: '',
    activeModal: false
};

export const currentItemReducer = (state:ICurrentItemInitialState = currentItemInitialState, action: TCurrentItemAction) => {
    switch (action.type) {
        case GET_CURRENT_ITEM: {
            return {
                ...state,
                currentItem: action.data,
                activeModal: true
            }
        }
        case CLEAR_CURRENT_ITEM:
            return {
                ...state,
                currentItem: {} as IIngridient,
                activeModal: false
            }
        case GET_CURRENT_ORDER_NUMBER:
            return {
                ...state,
                currentOrderNumber: action.data,
                activeModal: true
            }
        case CLEAR_CURRENT_ORDER_NUMBER:
            return {
                ...state,
                currentOrderNumber: '',
                activeModal: false
            }
        default: {
            return state;
        }
    }
};