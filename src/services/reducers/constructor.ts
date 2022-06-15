import {
    SET_BUN,
    SET_ITEM,
    DROP_ITEM,
    CHANGE_POSITION,
    SET_HOVER_POSITION,
    DROP_HOVER_POSITION,
    CLEAR_BASKET
} from "../constants/constructor";
import {TConstructorActions} from '../actions/constructor';
import {IIngridient,TChosenIngredients} from "../../types/Ingredient";

export interface IConstructorInitialState {
    chosenBun: IIngridient,
    chosenItems: Array<TChosenIngredients>,
    hoverBoundingRect: number
}

const constructorInitialState: IConstructorInitialState = {
    chosenBun: {} as IIngridient,
    chosenItems: [],
    hoverBoundingRect: 0
};

export const constructorOrderReducer = (state:IConstructorInitialState = constructorInitialState, action:TConstructorActions) => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state,
                chosenItems: [...state.chosenItems, {
                    ...action.data,
                    uid: action.uid
                }]
            }
        }
        case SET_BUN: {
            return {
                ...state,
                chosenBun: action.data
            }
        }
        case DROP_ITEM: {
            const index = state.chosenItems.findIndex(item => item.uid === action.id);
            state.chosenItems.splice(index, 1);
            return {
                ...state,
                chosenItems: [...state.chosenItems]
            }
        }
        case CHANGE_POSITION: {
            const index = state.chosenItems.findIndex((item) => item.uid === action.id);
            const indexTo = index + action.difference;
            const item = state.chosenItems[index];
            state.chosenItems.splice(index, 1);
            state.chosenItems.splice(indexTo, 0, item)
            return {
                ...state,
                chosenItems: [...state.chosenItems]
            }
        }
        case SET_HOVER_POSITION: {
            return {
                ...state,
                hoverBoundingRect: action.position
            }
        }
        case DROP_HOVER_POSITION: {
            return {
                ...state,
                hoverBoundingRect: 0
            }
        }
        case CLEAR_BASKET: {
            return {
                ...state,
                chosenItems: [],
                chosenBun: {} as IIngridient
            }
        }
        default: {
            return state;
        }
    }
};


