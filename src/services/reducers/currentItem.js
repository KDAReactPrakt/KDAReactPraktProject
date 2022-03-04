import {
    GET_CURRENT_ITEM,
    CLEAR_CURRENT_ITEM
} from '../actions/currentItem';

const currentItemInitialState = {
    currentItem: {},
    activeModal: false
};

export const currentItemReducer = (state = currentItemInitialState, action) => {
    switch (action.type) {
        case GET_CURRENT_ITEM: {
            return {
                currentItem: action.data,
                activeModal: true
            }
        }
        case CLEAR_CURRENT_ITEM:
            return {
                currentItem: {},
                activeModal: false
            }

        default: {
            return state;
        }
    }
};