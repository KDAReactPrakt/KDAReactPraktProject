import {
    GET_INGREDIENT,
    GET_INGREDIENT_FAILED,
    GET_INGREDIENT_SUCCESS
} from './ingredient';
import {URL} from '../../data/data'
import ingredientsMap from "../../functions/ingredientsMap";
import {checkResponse} from "../../functions/checkResponse";

//getIngredientData - получаем данные по ингредиентам из Api для REDUX
export function getIngredientData() {
    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENT
        })
        // Запрашиваем данные у сервера
        fetch(URL + 'ingredients').then(checkResponse)
            .then(res => {
                dispatch({
                    type: GET_INGREDIENT_SUCCESS,
                    data: ingredientsMap(res.data)
                })

            }).catch((err) => {
            alert(err ? err : "Произошла Непредвиденная ошибка");
            dispatch({
                type: GET_INGREDIENT_FAILED
            })
        })
    }
}
