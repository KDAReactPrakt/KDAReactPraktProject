import * as actions from '../constants/constructor'
import {constructorOrderReducer}  from "./constructor";

const constructorInitialState = {
    chosenBun: {},
    chosenItems: [],
    hoverBoundingRect: 0
}

describe('constructorOrderReducer', () => {
    it('should return the initial state', () => {
        expect(constructorOrderReducer(undefined, {})).toEqual(constructorInitialState);
    });

    it('should handle SET_ITEM', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.SET_ITEM,
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
                },
                uid: '60d3b41abdacab0026a733c7'
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                chosenItems: [
                    ...constructorInitialState.chosenItems,
                    {
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
                        uid: '60d3b41abdacab0026a733c7'
                    }
                ]
            })
        );
    });

    it('should handle SET_BUN', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.SET_BUN,
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
                    count: 2
                }
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                chosenBun:
                    {
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
                        count: 2
                    }
            })
        );
    });

    it('should handle DROP_ITEM', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.DROP_ITEM,
                _id: '60d3b41abdacab0026a733c7'
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                chosenItems: [...constructorInitialState.chosenItems]
            })
        );
    });

    it('should handle CHANGE_POSITION', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.CHANGE_POSITION,
                _id: '60d3b41abdacab0026a733c7',
                difference: 2
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                chosenItems: [...constructorInitialState.chosenItems]
            })
        );
    });

    it('should handle SET_HOVER_POSITION', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.SET_HOVER_POSITION,
                position: 2
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                hoverBoundingRect: 2
            })
        );
    });

    it('should handle DROP_HOVER_POSITION', () => {
        expect(
            constructorOrderReducer(constructorInitialState, {
                type: actions.CLEAR_BASKET
            })
        ).toEqual(
            expect.objectContaining({
                ...constructorInitialState,
                chosenItems: [],
                chosenBun: {}
            })
        );
    });
})