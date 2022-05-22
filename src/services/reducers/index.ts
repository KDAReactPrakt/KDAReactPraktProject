import { combineReducers } from 'redux';
import {ingredientsReducer} from "./ingredient";
import {orderNumberReducer} from "./orderNumber";
import {currentItemReducer} from "./currentItem";
import {tabReducer} from "./tabs";
import {constructorOrderReducer} from "./constructor";
import {profileReducer} from "./profile";
import {wsReducer} from "./wsConnection";
import {wsReducerUser} from "./wsConnectionUser";

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    orderNumber: orderNumberReducer,
    currentItemToModal: currentItemReducer,
    tab: tabReducer,
    constructorOrder: constructorOrderReducer,
    wsConnection: wsReducer,
    wsConnectionUser: wsReducerUser,
    profile: profileReducer
});