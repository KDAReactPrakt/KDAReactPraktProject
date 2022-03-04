import { combineReducers } from 'redux';
import {ingredientsReducer} from "./ingredient";
import {orderNumberReducer} from "./orderNumber";
import {currentItemReducer} from "./currentItem";
import {tabReducer} from "./tabs";
import {constructorOrderReducer} from "./constructor";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderNumber: orderNumberReducer,
    currentItem: currentItemReducer,
    tab: tabReducer,
    constructorOrder: constructorOrderReducer
});