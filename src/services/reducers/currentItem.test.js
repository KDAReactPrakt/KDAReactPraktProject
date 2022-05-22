import * as actions from '../constants/currentItem'
import {currentItemReducer} from "./currentItem";

const currentItemInitialState = {
    currentItem: {},
    currentOrderNumber: '',
    activeModal: false
};

describe('currentItemOrderReducer', () => {
    it('should return the initial state', () => {
        expect(currentItemReducer(undefined, {})).toEqual(currentItemInitialState);
    });

    it('should handle GET_CURRENT_ITEM', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.GET_CURRENT_ITEM,
                data: {
                    _id: '60d3b41abdacab0026a733c7',
                    name: 'Флюоресцентная булка R2-D3',
                    type: 'bun',
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                    image_mobile:
                        'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                    __v: 0,
                    count: 1
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentItem: {
                        _id: '60d3b41abdacab0026a733c7',
                        name: 'Флюоресцентная булка R2-D3',
                        type: 'bun',
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: 'https://code.s3.yandex.net/react/code/bun-01.png',
                        image_mobile:
                            'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
                        image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
                        __v: 0,
                        count: 1,
                    },
                activeModal: true
            })
        );
    });

    it('should handle CLEAR_CURRENT_ITEM', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ITEM,
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentItem: {},
                activeModal: false
            })
        );
    });

    it('should handle GET_CURRENT_ORDER_NUMBER', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ITEM,
                data: '123123'
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentOrderNumber: '123123',
                activeModal: true
            })
        );
    })

    it('should handle CLEAR_CURRENT_ORDER_NUMBER', () => {
        expect(
            currentItemReducer(currentItemInitialState, {
                type: actions.CLEAR_CURRENT_ORDER_NUMBER,
            })
        ).toEqual(
            expect.objectContaining({
                ...currentItemInitialState,
                currentOrderNumber: '',
                activeModal: false
            })
        );
    });
});