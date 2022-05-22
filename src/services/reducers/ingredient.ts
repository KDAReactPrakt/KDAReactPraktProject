import {
    CLEAR_COUNT,
    DECREASE_ITEM_COUNT,
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS, INCREASE_ITEM_COUNT
} from '../constants/ingredient';
import {TIngredientAction} from '../actions/ingredient'
import {IIngridient} from "../../types/Ingredient";

interface IIngredientsInitialState {
    ingredientsData: Array<IIngridient>,
    ingredientsSuccess: boolean,
    ingredientsFailed: boolean,
    ingredientsRequest: boolean
}

const ingredientsInitialState: IIngredientsInitialState = {
    ingredientsData: [{} as IIngridient],
    ingredientsSuccess: false,
    ingredientsFailed: false,
    ingredientsRequest: false
};

export const ingredientsReducer = (state:IIngredientsInitialState = ingredientsInitialState, action:TIngredientAction) => {
    switch (action.type) {
        case GET_INGREDIENT: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredientsSuccess: false
            };
        }
        case GET_INGREDIENT_SUCCESS: {
            return {
                ...state,
                ingredientsData: action.data,
                ingredientsRequest: false,
                ingredientsSuccess: true,
                ingredientsFailed: false,
            };
        }
        case GET_INGREDIENT_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredientsSuccess: false
            };
        }
        case INCREASE_ITEM_COUNT: {
            const arr:Array<IIngridient> = state.ingredientsData;
            const index = arr.findIndex(item => item._id === action.id);
            if(index !== -1) {
                arr[index].count += 1;
            }
            return {
                ...state,
                ingredientsData: arr
            }
        }
        case DECREASE_ITEM_COUNT: {
            return {
                ...state,
                ingredientsData: state.ingredientsData.map(item => {
                    if(item._id === action.id) {
                        item.count = item.count - 1
                    }
                    return item;
                })
            }
        }
        case CLEAR_COUNT: {
            return {
                ...state,
                ingredientsData: state.ingredientsData.map(item => {
                    item.count = 0;
                    return item;
                })
            }
        }
        default: {
            return state
        }
    }
}