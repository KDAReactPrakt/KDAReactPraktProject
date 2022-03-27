import { combineReducers } from 'redux';
import {ingredientsReducer} from "./ingredient";
import {orderNumberReducer} from "./orderNumber";
import {currentItemReducer} from "./currentItem";
import {tabReducer} from "./tabs";
import {constructorOrderReducer} from "./constructor";
import {profileReducer} from "./profile";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderNumber: orderNumberReducer,
    currentItem: currentItemReducer,
    tab: tabReducer,
    constructorOrder: constructorOrderReducer,
    profile: profileReducer
});