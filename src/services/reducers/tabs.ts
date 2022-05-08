import {SET_TAB} from "../constants/tabs";
import {TTabsAction} from "../actions/tabs"

interface ITabInitialState {
    activeTab: string
}

const tabInitialState: ITabInitialState = {
    activeTab: 'one'
}

export const tabReducer = (state:ITabInitialState = tabInitialState, action:TTabsAction) => {
    switch (action.type) {
        case SET_TAB: {
            return {
                activeTab: action.tab
            }
        }
        default:{
            return state
        }
    }
}