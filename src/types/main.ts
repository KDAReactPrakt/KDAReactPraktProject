import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import {TConstructorActions} from "../services/actions/constructor";
import {TCurrentItemAction} from "../services/actions/currentItem";
import {TIngredientAction} from "../services/actions/ingredient";
import {TOrderNumberActions} from "../services/actions/orderNumber";
import {TProfileActions} from "../services/actions/profile";
import {TTabsAction} from "../services/actions/tabs";
import {store} from "../index";


type TApplicationActions = |TConstructorActions
    |TCurrentItemAction
    |TIngredientAction
    |TOrderNumberActions
    |TProfileActions
    |TTabsAction
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
    ThunkAction<ReturnType, Action, RootState, TApplicationActions>
    >;