import {
    SET_BUN,
    SET_ITEM,
    DROP_ITEM,
    CHANGE_POSITION
} from "../actions/constructor";


const constructorInitialState = {
    chosenBun: {},
    chosenItems: [],
    chosenItemsCount: []
};

export const constructorOrderReducer = (state = constructorInitialState, action) => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state,
                chosenItems: [...state.chosenItems, action.data]
            }
        }
        case SET_BUN: {
            return {
                ...state,
                chosenBun: action.data
            }
        }
        case DROP_ITEM: {
            const index = state.chosenItems.findIndex(item => item._id === action.id);
            state.chosenItems.splice(index, 1);
            return {
                ...state,
                chosenItems: [...state.chosenItems]
            }
        }
        case CHANGE_POSITION: {
            const index = action.index;
            const indexTo = index + action.difference;
            const item = state.chosenItems[index];
            state.chosenItems.splice(index, 1);
            state.chosenItems.splice(indexTo, 0, item)
            console.log()
            return {
                ...state,
                chosenItems: [...state.chosenItems]
            }
        }
        default: {
            return state;
        }
    }
};


