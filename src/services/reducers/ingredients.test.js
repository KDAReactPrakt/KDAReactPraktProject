import * as actions from '../constants/ingredient'
import {ingredientsReducer} from "./ingredient";

const ingredientsInitialState = {
    ingredientsData: [{}],
    ingredientsSuccess: false,
    ingredientsFailed: false,
    ingredientsRequest: false
};

describe('ingredientsReducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, {})).toEqual(ingredientsInitialState);
    });

    it('should handle GET_INGREDIENT', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.GET_INGREDIENT,
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsRequest: true,
                ingredientsFailed: false,
                ingredientsSuccess: false
            })
        );
    });

    it('should handle GET_INGREDIENT_SUCCESS', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.GET_INGREDIENT_SUCCESS,
                data: [
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
                        image_large:
                            'https://code.s3.yandex.net/react/code/bun-01-large.png',
                        __v: 0,
                    },
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
                        image_large:
                            'https://code.s3.yandex.net/react/code/bun-01-large.png',
                        __v: 0,
                    }
                ]
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsData: [
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
                        image_large:
                            'https://code.s3.yandex.net/react/code/bun-01-large.png',
                        __v: 0,
                    },
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
                        image_large:
                            'https://code.s3.yandex.net/react/code/bun-01-large.png',
                        __v: 0,
                    }
                ],
                ingredientsRequest: false,
                ingredientsSuccess: true,
                ingredientsFailed: false,
            })
        );
    });

    it('should handle GET_INGREDIENT_FAILED', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.GET_INGREDIENT_FAILED,
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredientsSuccess: false
            })
        );
    });

    it('should handle INCREASE_ITEM_COUNT', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.INCREASE_ITEM_COUNT,
                id: '60d3b41abdacab0026a733c7'
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsData: [...ingredientsInitialState.ingredientsData],
            })
        );
    });

    it('should handle DECREASE_ITEM_COUNT', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.DECREASE_ITEM_COUNT,
                id: '60d3b41abdacab0026a733c7'
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsData: [...ingredientsInitialState.ingredientsData],
            })
        );
    });

    it('should handle CLEAR_COUNT', () => {
        expect(
            ingredientsReducer(ingredientsInitialState, {
                type: actions.CLEAR_COUNT,
            })
        ).toEqual(
            expect.objectContaining({
                ...ingredientsInitialState,
                ingredientsData: [...ingredientsInitialState.ingredientsData],
            })
        );
    });
})