import {
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from '../constants/ingredient';
import {URL} from '../../data/data'
import ingredientsMap from "../../functions/ingredientsMap";
import {checkResponse} from "../../functions/checkResponse";
import {AppDispatch} from "../../types/main";

//getIngredientData - получаем данные по ингредиентам из Api для REDUX
export function getIngredientData() {
    return function (dispatch:AppDispatch) {
        dispatch({
            type: GET_INGREDIENT
        })
        // Запрашиваем данные у сервера
        fetch(URL + 'ingredients').then(checkResponse)
            .then(res => {
                let result: any = ingredientsMap(res.data)
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: result
                })

            }).catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}
