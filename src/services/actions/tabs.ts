import {SET_TAB} from "../constants/tabs";

export interface ISetTabsAction {
    readonly type: typeof SET_TAB,
    readonly tab: string
}

export type TTabsAction = ISetTabsAction